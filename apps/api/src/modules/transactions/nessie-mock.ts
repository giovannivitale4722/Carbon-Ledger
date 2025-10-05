import { NessieAccount, NessiePurchase } from '@carbon-ledger/types';
import mockTransactions from './mock-transactions.json';

/**
 * Mock Nessie API client for demo/development
 */
export class NessieMockClient {
  async getAccounts(customerId: string): Promise<NessieAccount[]> {
    return [
      {
        _id: 'mock_account_1',
        type: 'Credit Card',
        nickname: 'Capital One Venture',
        rewards: 12500,
        balance: 2543.21,
        account_number: '****1234',
        customer_id: customerId,
      },
      {
        _id: 'mock_account_2',
        type: 'Checking',
        nickname: 'Capital One 360 Checking',
        rewards: 0,
        balance: 5234.56,
        account_number: '****5678',
        customer_id: customerId,
      },
    ];
  }

  async getPurchases(accountId: string): Promise<NessiePurchase[]> {
    // Return mock transactions from JSON file
    return mockTransactions.map((txn, idx) => ({
      _id: `mock_purchase_${accountId}_${idx}`,
      merchant_id: txn.merchant_id,
      medium: 'balance',
      purchase_date: txn.purchase_date,
      amount: txn.amount,
      status: 'completed',
      description: txn.description,
    }));
  }

  async getAccount(accountId: string): Promise<NessieAccount> {
    const accounts = await this.getAccounts('mock_customer');
    const account = accounts.find((a) => a._id === accountId);
    if (!account) {
      throw new Error(`Account ${accountId} not found`);
    }
    return account;
  }
}

/**
 * Real Nessie API client (for production use with actual API key)
 */
export class NessieClient {
  constructor(
    private apiKey: string,
    private baseUrl: string
  ) {}

  private async request<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}?key=${this.apiKey}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Nessie API error: ${response.statusText}`);
    }
    
    return (await response.json()) as unknown as T;
  }

  async getAccounts(customerId: string): Promise<NessieAccount[]> {
    return this.request<NessieAccount[]>(`/customers/${customerId}/accounts`);
  }

  async getPurchases(accountId: string): Promise<NessiePurchase[]> {
    return this.request<NessiePurchase[]>(`/accounts/${accountId}/purchases`);
  }

  async getAccount(accountId: string): Promise<NessieAccount> {
    return this.request<NessieAccount>(`/accounts/${accountId}`);
  }
}

// Factory function to get the appropriate client
export function getNessieClient(useReal: boolean = false) {
  // Use real API only if explicitly requested AND API key is available
  if (useReal === true && process.env.NESSIE_API_KEY) {
    console.log('🔗 Using real Nessie API client');
    return new NessieClient(
      process.env.NESSIE_API_KEY,
      process.env.NESSIE_API_BASE || 'http://api.nessieisreal.com'
    );
  }
  
  // Default to mock client for development (even if API key exists)
  console.log('🎭 Using mock Nessie client for development');
  return new NessieMockClient();
}

