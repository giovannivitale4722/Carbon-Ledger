import { EchoClient, createEchoOpenAI } from '@merit-systems/echo-typescript-sdk';
import { generateText, generateObject } from 'ai';
import { z } from 'zod';
import { logger } from '../../utils/logger';

interface Transaction {
  id: string;
  date: Date;
  amountUSD: number;
  rawDescription: string;
  category: string;
  merchantName?: string;
}

interface AIEmissionEstimate {
  kgCO2e: number;
  confidence: 'high' | 'medium' | 'low';
  explanation: string;
  category: string;
  suggestedAlternatives?: string[];
}

interface ActionPlan {
  title: string;
  summary: string;
  totalEmissions: number;
  targetReduction: number;
  actions: ActionItem[];
  timeline: string;
  estimatedImpact: string;
}

interface ActionItem {
  category: string;
  action: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  impactKg: number;
  timeframe: string;
  steps: string[];
}

export class AIService {
  private echo: EchoClient | null = null;
  private openai: ReturnType<typeof createEchoOpenAI> | null = null;
  private enabled: boolean;
  private appId: string;

  constructor() {
    const apiKey = process.env.ECHO_API_KEY;
    this.appId = process.env.ECHO_APP_ID || '';
    this.enabled = process.env.ENABLE_AI_FEATURES === 'true' && !!apiKey && !!this.appId;

    if (this.enabled && apiKey && this.appId) {
      this.echo = new EchoClient({ apiKey });
      this.openai = createEchoOpenAI(
        { appId: this.appId },
        async () => apiKey
      );
      logger.info('🤖 AI Service initialized with Echo Merit Systems');
    } else {
      logger.info('🤖 AI Service disabled (set ENABLE_AI_FEATURES=true, ECHO_API_KEY, and ECHO_APP_ID to enable)');
    }
  }

  /**
   * Check if AI features are enabled
   */
  isEnabled(): boolean {
    return this.enabled && this.openai !== null;
  }

  /**
   * Use AI to estimate emissions for a transaction with enhanced context
   */
  async estimateEmissionsWithAI(transaction: Transaction): Promise<AIEmissionEstimate | null> {
    if (!this.isEnabled() || !this.openai) {
      return null;
    }

    try {
      const estimateSchema = z.object({
        kgCO2e: z.number().describe('Estimated kilograms of CO2 equivalent emissions'),
        confidence: z.enum(['high', 'medium', 'low']).describe('Confidence level of the estimate'),
        explanation: z.string().describe('Brief explanation of the estimate methodology'),
        category: z.string().describe('Refined transaction category'),
        suggestedAlternatives: z.array(z.string()).optional().describe('Lower-carbon alternatives if applicable')
      });

      const prompt = `You are a carbon emissions expert. Analyze this transaction and provide an accurate CO2e estimate.

Transaction Details:
- Date: ${transaction.date.toISOString().split('T')[0]}
- Amount: $${transaction.amountUSD.toFixed(2)} USD
- Description: ${transaction.rawDescription}
- Merchant: ${transaction.merchantName || 'Unknown'}
- Category: ${transaction.category}

Provide:
1. Estimated kg CO2e (be specific and realistic based on spend-based carbon accounting)
2. Confidence level (high/medium/low)
3. Brief explanation of your estimate
4. Refined category if needed
5. Suggested lower-carbon alternatives (if applicable)`;

      const { object: result } = await generateObject({
        model: this.openai('gpt-4o-mini'),
        schema: estimateSchema,
        system: 'You are an expert in carbon emissions accounting and environmental sustainability. Provide accurate, data-driven CO2e estimates based on transaction data using spend-based carbon accounting principles.',
        prompt,
      });

      logger.info(`🤖 AI estimated ${result.kgCO2e} kg CO2e for transaction ${transaction.id}`);
      
      return result as AIEmissionEstimate;
    } catch (error) {
      logger.error('❌ AI estimation failed:', error);
      return null;
    }
  }

  /**
   * Generate a personalized action plan based on spending patterns
   */
  async generateActionPlan(
    userId: string,
    transactions: Transaction[],
    totalEmissions: number,
    categoryBreakdown: Array<{ category: string; kgCO2e: number; percentage: number }>
  ): Promise<ActionPlan | null> {
    if (!this.isEnabled() || !this.openai) {
      return null;
    }

    try {
      // Summarize transaction patterns
      const topCategories = categoryBreakdown.slice(0, 5);
      const merchantFrequency = this.analyzeMerchantFrequency(transactions);
      const spendingPatterns = this.analyzeSpendingPatterns(transactions);

      const actionPlanSchema = z.object({
        title: z.string().describe('Catchy and motivating title'),
        summary: z.string().describe('2-3 sentence summary of the plan'),
        totalEmissions: z.number().describe('Total emissions in kg CO2e'),
        targetReduction: z.number().describe('Target kg CO2e to reduce (15-30% of total)'),
        timeline: z.string().describe('Overall timeline for implementation'),
        estimatedImpact: z.string().describe('Description of estimated impact'),
        actions: z.array(z.object({
          category: z.string().describe('Category this action addresses'),
          action: z.string().describe('Specific action description'),
          difficulty: z.enum(['easy', 'moderate', 'challenging']).describe('Difficulty level'),
          impactKg: z.number().describe('Estimated kg CO2e reduction'),
          timeframe: z.string().describe('When to implement'),
          steps: z.array(z.string()).describe('3-5 concrete implementation steps')
        })).describe('5-7 prioritized actions')
      });

      const prompt = `You are a carbon reduction advisor. Create a personalized action plan to help reduce carbon emissions.

User's Carbon Footprint Summary:
- Total Monthly Emissions: ${totalEmissions.toFixed(2)} kg CO2e
- Number of Transactions: ${transactions.length}

Top Emission Categories:
${topCategories.map(cat => `- ${cat.category}: ${cat.kgCO2e.toFixed(2)} kg CO2e (${cat.percentage.toFixed(1)}%)`).join('\n')}

Frequent Merchants:
${merchantFrequency.slice(0, 5).map(m => `- ${m.merchant}: ${m.count} visits`).join('\n')}

Spending Patterns:
- Most active day: ${spendingPatterns.mostActiveDay}
- Average transaction: $${spendingPatterns.averageTransactionValue.toFixed(2)}

Create a personalized action plan with specific, actionable recommendations like:
- "Take public transportation 2-3 times per week instead of driving to reduce fuel emissions by 15%"
- "Switch to renewable energy provider to cut home energy emissions by 25%"
- "Choose local/seasonal groceries to reduce food transport emissions by 10%"

Focus on the top emission categories and provide realistic percentage reductions for each action.`;

      const { object: result } = await generateObject({
        model: this.openai('gpt-4o-mini'),
        schema: actionPlanSchema,
        system: 'You are an expert carbon reduction advisor. Create actionable, personalized plans that are realistic and achievable. Focus on behavioral changes, sustainable alternatives, and measurable impact. Provide specific percentage reductions and practical steps.',
        prompt,
      });

      logger.info(`🤖 AI generated action plan for user ${userId} with ${result.actions?.length || 0} actions`);
      
      return result as ActionPlan;
    } catch (error) {
      logger.error('❌ AI action plan generation failed:', error);
      return null;
    }
  }

  /**
   * Get AI insights about emission trends
   */
  async getEmissionInsights(
    monthlyData: Array<{ month: string; kgCO2e: number }>,
    categoryTrends: Array<{ category: string; trend: number }>
  ): Promise<string | null> {
    if (!this.isEnabled() || !this.openai) {
      return null;
    }

    try {
      const prompt = `Analyze these carbon emission trends and provide 2-3 key insights:

Monthly Emissions:
${monthlyData.map(m => `${m.month}: ${m.kgCO2e.toFixed(2)} kg CO2e`).join('\n')}

Category Trends (% change):
${categoryTrends.map(t => `${t.category}: ${t.trend > 0 ? '+' : ''}${t.trend.toFixed(1)}%`).join('\n')}

Provide:
1. Most significant trend observation
2. Potential cause or explanation
3. Actionable recommendation

Keep it concise (2-3 sentences total).`;

      const { text: insights } = await generateText({
        model: this.openai('gpt-4o-mini'),
        system: 'You are a carbon emissions analyst. Provide clear, actionable insights.',
        prompt,
      });

      logger.info('🤖 AI generated emission insights');
      
      return insights;
    } catch (error) {
      logger.error('❌ AI insights generation failed:', error);
      return null;
    }
  }

  /**
   * Check Echo balance for AI usage
   */
  async checkBalance(): Promise<{ balance: number; formatted: string } | null> {
    if (!this.echo) {
      return null;
    }

    try {
      const balance = await this.echo.balance.getBalance();
      return {
        balance: balance.balance,
        formatted: `$${balance.balance.toFixed(2)}`
      };
    } catch (error) {
      logger.error('❌ Failed to check Echo balance:', error);
      return null;
    }
  }

  /**
   * Create payment link for topping up Echo balance
   */
  async createPaymentLink(amount: number = 10): Promise<string | null> {
    if (!this.echo) {
      return null;
    }

    try {
      const payment = await this.echo.payments.createPaymentLink({ amount });
      return payment.paymentLink.url;
    } catch (error) {
      logger.error('❌ Failed to create payment link:', error);
      return null;
    }
  }

  /**
   * Analyze merchant visit frequency
   */
  private analyzeMerchantFrequency(transactions: Transaction[]): Array<{ merchant: string; count: number }> {
    const merchantMap = new Map<string, number>();
    
    transactions.forEach(txn => {
      if (txn.merchantName) {
        merchantMap.set(txn.merchantName, (merchantMap.get(txn.merchantName) || 0) + 1);
      }
    });

    return Array.from(merchantMap.entries())
      .map(([merchant, count]) => ({ merchant, count }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Analyze spending patterns
   */
  private analyzeSpendingPatterns(transactions: Transaction[]): any {
    const byDayOfWeek = new Map<number, number>();
    const byTimeOfMonth = { early: 0, mid: 0, late: 0 };
    
    transactions.forEach(txn => {
      const dayOfWeek = txn.date.getDay();
      byDayOfWeek.set(dayOfWeek, (byDayOfWeek.get(dayOfWeek) || 0) + 1);
      
      const dayOfMonth = txn.date.getDate();
      if (dayOfMonth <= 10) byTimeOfMonth.early++;
      else if (dayOfMonth <= 20) byTimeOfMonth.mid++;
      else byTimeOfMonth.late++;
    });

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mostActiveDay = days[Array.from(byDayOfWeek.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || 0];

    return {
      mostActiveDay,
      timeOfMonth: byTimeOfMonth,
      averageTransactionValue: transactions.reduce((sum, t) => sum + t.amountUSD, 0) / transactions.length,
    };
  }
}


