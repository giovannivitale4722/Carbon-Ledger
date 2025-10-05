# 🌱 GreenPrint

**Reframe bank transactions as carbon spending**

GreenPrint is a FinTech sustainability application that integrates with Capital One's Nessie API (or simulated equivalent) to estimate per-transaction CO₂e emissions. It empowers users to understand and reduce their carbon footprint through actionable insights and personalized recommendations.

## 🎯 Project Overview

**Problem**: Most people don't understand how their daily spending impacts the environment.

**Solution**: GreenPrint automatically calculates the carbon footprint of every transaction, visualizes trends, and provides actionable advice like "Reduce 20% by switching to public transit twice/week."

**Sponsor Fit**: Creative use of Capital One financial data for sustainability; empowers climate action through consumer banking.

## ✨ Key Features

- 🔗 **Bank Integration**: Connect Capital One/Nessie accounts (with mock fallback for demos)
- 💳 **Transaction Analysis**: Automatic CO₂e estimation per transaction
- 📊 **Rich Dashboards**: Visualize emissions by category, merchant, and time
- 🎯 **Smart Recommendations**: Personalized actions to reduce your carbon footprint
- 🔬 **Transparent Methodology**: View emission factors and calculation methods
- 📈 **Progress Tracking**: Set carbon budgets and monitor improvements
- 🚀 **AWS Ready**: Complete deployment configs for production scale

## 🏗️ Architecture

### Tech Stack

- **Language**: TypeScript everywhere
- **Monorepo**: pnpm workspaces + Turborepo
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, shadcn/ui, TanStack Query, Recharts
- **Backend**: Node.js 20, Express + tRPC, Zod validation
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: JWT-based authentication
- **Jobs**: node-cron (local), EventBridge Scheduler (AWS)

### Project Structure

```
carbon-ledger/
├── apps/
│   ├── api/                      # Express + tRPC backend
│   │   ├── src/
│   │   │   ├── modules/          # Business logic
│   │   │   │   ├── transactions/
│   │   │   │   ├── emissions/
│   │   │   │   ├── recommendations/
│   │   │   │   └── budgets/
│   │   │   ├── trpc/             # tRPC routers
│   │   │   ├── jobs/             # Scheduled tasks
│   │   │   └── prisma/           # Database schema & seeds
│   │   └── package.json
│   │
│   └── web/                      # Next.js frontend
│       ├── src/
│       │   ├── app/              # App Router pages
│       │   │   ├── (app)/        # Authenticated routes
│       │   │   │   ├── dashboard/
│       │   │   │   ├── transactions/
│       │   │   │   ├── insights/
│       │   │   │   ├── actions/
│       │   │   │   └── settings/
│       │   │   └── login/
│       │   ├── components/       # React components
│       │   └── lib/              # Utilities
│       └── package.json
│
├── packages/
│   ├── types/                    # Shared TypeScript types
│   ├── db/                       # Prisma client wrapper
│   └── emissions/                # Emission calculation logic
│       ├── classify.ts           # MCC → category mapping
│       ├── estimate.ts           # CO₂e estimation
│       └── datasets.ts           # Local emission factors
│
├── aws/
│   ├── option-a/                 # Amplify + App Runner
│   └── option-b/                 # ECS/Fargate + Copilot
│
├── setup.sh                     # Universal setup script
├── setup.bat                    # Windows setup script
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8+
- PostgreSQL (local installation)

### Setup (Choose Your Platform)

#### macOS/Linux
```bash
git clone <your-repo-url>
cd carbon-ledger
./setup.sh
```

#### Windows
```bash
git clone <your-repo-url>
cd carbon-ledger
setup.bat
```

### Start the Application
```bash
pnpm dev
```

### Access the App
- Frontend: http://localhost:3000
- API: http://localhost:4000
- Login: demo@carbonledger.com / demo123

### Manual Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd carbon-ledger

# Install dependencies
pnpm install

# Set up environment variables
./setup-env.sh

# Set up database
./reset-database.sh

# Push database schema
pnpm db:push

# Seed database with demo data
pnpm db:seed

# Start all services
pnpm dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Health**: http://localhost:4000/health

### Demo Credentials

```
Email: demo@carbonledger.com
Password: demo123
```

## 🔬 Emissions Methodology

### Classification

Transactions are classified into carbon categories using:
1. **MCC Codes**: Merchant Category Codes → categories
2. **Keywords**: Description text matching (fallback)

Categories include: `transport.fuel`, `utilities.electricity`, `grocery`, `restaurants`, `apparel`, etc.

### Estimation Methods

#### 1. **Activity-Based** (High Confidence)
When quantity is known (e.g., "15.5 gal", "250 kWh"):
```
CO₂e = quantity × emission_factor
Example: 12 gallons × 8.89 kg/gal = 106.68 kg CO₂e
```

#### 2. **Spend-Based Intensity** (Medium Confidence)
When only dollar amount is known:
```
CO₂e = amount_USD × intensity_factor
Example: $45.32 × 0.52 kg/$USD = 23.57 kg CO₂e
```

### Data Sources

- **Primary**: Local emission factors (EPA, DEFRA, EIOMLCA)
- **Optional**: Climatiq API integration (toggle via `USE_LOCAL_EMISSION_DATA`)

### Transparency

Every estimate includes:
- Calculation method (ACTIVITY or INTENSITY)
- Emission factor used
- Source (EPA, DEFRA, etc.)
- Confidence level (high/medium/low)

## 📊 API Reference

### tRPC Routes

```typescript
// Authentication
auth.register({ email, password, name? })
auth.login({ email, password })
auth.me()

// Accounts
accounts.list()
accounts.syncFromNessie({ useRealNessie? })

// Transactions
transactions.list({ accountId, month?, category?, q? })
transactions.get({ transactionId })
transactions.sync({ accountId, useRealNessie? })

// Emissions
emissions.dashboard({ month? })
emissions.computeMissing({ accountId? })
emissions.recomputeAll()

// Recommendations
recommendations.list({ month? })
recommendations.generate({ month? })
recommendations.accept({ recommendationId })

// Budgets
budgets.get({ month })
budgets.upsert({ month, limitKg })
budgets.list()
```

### REST Endpoints (Jobs)

```bash
POST /jobs/sync-transactions      # Sync all accounts
POST /jobs/recompute-monthly      # Generate recommendations
GET  /health                      # Health check
```

## ☁️ AWS Deployment

### Option A: Fast Path (Managed Services)

**Best for**: Rapid deployment, minimal ops

- **Frontend**: AWS Amplify Hosting
- **Backend**: AWS App Runner
- **Database**: RDS PostgreSQL

```bash
cd aws/option-a
# Follow app-runner-readme.md
```

**Cost**: ~$57-103/month

### Option B: Production Path (ECS/Fargate)

**Best for**: Production scale, full control

- **Services**: ECS on Fargate
- **Routing**: Application Load Balancer
- **Registry**: Amazon ECR
- **IaC**: AWS Copilot CLI

```bash
cd aws/option-b
# Follow README.md
```

**Cost**: ~$58-83/month

See detailed deployment guides in `aws/` directory.

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Test emissions calculations
pnpm --filter @carbon-ledger/emissions test
```

## 📈 Database Schema

Key models:
- **User**: Authentication and profile
- **Account**: Linked bank accounts
- **Transaction**: Financial transactions
- **Merchant**: Merchant/vendor information
- **EmissionFactor**: CO₂e conversion factors
- **EmissionEstimate**: Calculated emissions per transaction
- **Budget**: Monthly carbon budgets
- **Recommendation**: Personalized action items

See `apps/api/src/prisma/schema.prisma` for full schema.

## 🔐 Security & Privacy

- Passwords hashed with bcrypt
- JWT tokens for API authentication
- Secrets managed via AWS Secrets Manager
- Minimal PII collection (email only)
- Data export and account deletion available
- All database queries parameterized (Prisma)
- CORS and Helmet security headers

## 📝 Environment Variables

```bash
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/carbon_ledger

# Auth
JWT_SECRET=your-secret-key

# External APIs (optional)
NESSIE_API_BASE=https://api.reimaginebanking.com
NESSIE_API_KEY=your-key

CLIMATIQ_API_BASE=https://api.climatiq.io
CLIMATIQ_API_KEY=your-key

# Toggles
USE_LOCAL_EMISSION_DATA=true  # Use local factors vs Climatiq API

# Frontend
NEXT_PUBLIC_API_BASE=http://localhost:4000
```

## 🎨 UI Components

Built with shadcn/ui primitives:
- **Dashboard**: KPI cards, pie charts, line charts (Recharts)
- **Transactions**: Searchable/filterable table with method badges
- **Insights**: Category deep dives, comparisons, benchmarks
- **Actions**: Recommendation cards with impact estimates
- **Settings**: Account management, carbon budget configuration

## 🤝 Contributing

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and test
pnpm dev
pnpm test
pnpm lint

# Commit and push
git commit -m "feat: your feature"
git push origin feature/your-feature
```

## 📚 Additional Resources

- **Emission Factors**: `packages/emissions/src/datasets.ts`
- **MCC Mapping**: `packages/emissions/src/constants.ts`
- **API Documentation**: tRPC provides type-safe API
- **Deployment Guides**: See `aws/` directory

## 🏆 Hackathon Highlights

### Capital One Integration
- Creative use of financial transaction data
- Mock Nessie API for reliable demos
- Real API support ready for production

### Sustainability Impact
- Transparent methodology with sources
- Actionable recommendations with quantified impact
- Empowers users to reduce carbon footprint

### Technical Excellence
- Production-ready architecture
- Comprehensive AWS deployment options
- Type-safe end-to-end TypeScript
- Modern tooling (tRPC, Prisma, Next.js 14)
- Complete CI/CD configurations

## 📄 License

MIT License - see LICENSE file for details

## 👥 Team

Built with ❤️ for sustainability and clean code.

---

**Ready to track your carbon footprint? Start with** `pnpm dev` **and visit** http://localhost:3000

For questions or issues, please open a GitHub issue.

# Carbon-Ledger
