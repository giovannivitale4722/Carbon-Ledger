# 🚀 Railway + Vercel Deployment Walkthrough

**Complete step-by-step guide to deploy GreenPrint in 30 minutes**

Your code is now on GitHub: `https://github.com/giovannivitale4722/Carbon-Ledger`

---

## ✅ **Part 1: Deploy Backend to Railway (15 minutes)**

### Step 1: Sign Up for Railway

1. Go to **[railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Sign in with GitHub
4. Authorize Railway to access your repositories

### Step 2: Create New Project from GitHub

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Find and select **`Carbon-Ledger`**
4. Railway will automatically detect your monorepo

### Step 3: Add PostgreSQL Database

1. In your Railway project dashboard
2. Click **"+ New"** → **"Database"** → **"Add PostgreSQL"**
3. Railway automatically provisions the database (takes ~30 seconds)
4. You'll see a new PostgreSQL service appear

### Step 4: Configure API Service

Railway might auto-detect the web app. We need to configure it for the API:

1. **Click on the API service** (or create new service from repo)

2. **Set Root Directory**:
   - Go to **Settings** tab
   - Under **"Source"**, set **Root Directory**: `apps/api`
   - Click **"Save"**

3. **Configure Build Settings**:
   - Build Command: 
     ```bash
     cd ../.. && pnpm install && pnpm --filter @carbon-ledger/db prisma generate && pnpm --filter @carbon-ledger/api build
     ```
   - Start Command:
     ```bash
     cd ../.. && pnpm --filter @carbon-ledger/api start
     ```
   - Install Command: `pnpm install`

4. **Set Watch Paths** (optional, for auto-deploy):
   - `apps/api/**`
   - `packages/**`

### Step 5: Set Environment Variables

1. Click on your API service
2. Go to **Variables** tab
3. Click **"+ New Variable"** and add these one by one:

```bash
# Database (Railway provides this automatically - use "Reference")
DATABASE_URL=${{Postgres.DATABASE_URL}}

# JWT Secret (generate a random 32-character string)
JWT_SECRET=your-random-32-char-string-here-change-this

# Nessie API
NESSIE_API_KEY=9a61128e72966e67649ec43222e120c9
NESSIE_API_BASE=http://api.nessieisreal.com

# Climatiq API (optional)
CLIMATIQ_API_BASE=https://api.climatiq.io
CLIMATIQ_API_KEY=
USE_LOCAL_EMISSION_DATA=true

# Echo Merit Systems AI
ECHO_API_KEY=echo_b04f7559c995410688faf2bae7e40391dccf729c2affe2d3391332a6b66fa2e4
ECHO_APP_ID=c4cb4416-3196-4266-8865-27a67c05b9b1
ENABLE_AI_FEATURES=true

# Node Environment
NODE_ENV=production
PORT=4000
```

**Pro Tip**: For `DATABASE_URL`, click the **"+"** button and select **"Reference"** → Choose your Postgres service → Select `DATABASE_URL`. This automatically links it!

**Generate JWT_SECRET**:
```bash
# Run this in your terminal to generate a secure secret
openssl rand -base64 32
```

### Step 6: Deploy API

1. Railway will automatically start deploying after you save environment variables
2. Watch the **"Deployments"** tab for build logs
3. Wait for deployment to complete (~3-5 minutes)
4. Once deployed, you'll see a green checkmark ✅

### Step 7: Get Your API URL

1. Go to **Settings** tab of your API service
2. Scroll to **"Networking"**
3. Click **"Generate Domain"**
4. Copy the URL (something like `https://carbon-ledger-api-production.up.railway.app`)
5. **Save this URL** - you'll need it for Vercel!

### Step 8: Run Database Migrations

We need to initialize the database with tables:

**Option A: Using Railway CLI** (recommended)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Run migrations
railway run pnpm --filter @carbon-ledger/api prisma migrate deploy

# Seed database
railway run pnpm --filter @carbon-ledger/api tsx apps/api/src/prisma/seeds/seed.ts
```

**Option B: Using Railway Dashboard**
1. Go to your API service → **Settings** → **Deploy Logs**
2. Wait for first deployment to complete
3. Click **"Shell"** (if available) or use Railway CLI above

### Step 9: Test Your API

Open your browser and visit:
```
https://your-railway-url.up.railway.app/health
```

You should see:
```json
{"status":"ok","timestamp":"2025-10-05T..."}
```

✅ **Backend deployed! Now let's deploy the frontend.**

---

## ✅ **Part 2: Deploy Frontend to Vercel (15 minutes)**

### Step 1: Sign Up for Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel

### Step 2: Import Your Project

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find **`Carbon-Ledger`** in your repository list
3. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will show you the configuration screen:

1. **Project Name**: `carbon-ledger` (or whatever you prefer)

2. **Framework Preset**: Next.js (should auto-detect)

3. **Root Directory**: 
   - Click **"Edit"**
   - Select or type: `apps/web`
   - ✅ Include source files outside of the Root Directory in the Build Step

4. **Build and Output Settings**:
   - **Build Command**: 
     ```bash
     cd ../.. && pnpm install && pnpm --filter @carbon-ledger/web build
     ```
   - **Output Directory**: `.next` (default, leave as-is)
   - **Install Command**: `pnpm install`

### Step 4: Add Environment Variables

Before clicking "Deploy", add environment variables:

1. Expand **"Environment Variables"** section
2. Add this variable:

```bash
NEXT_PUBLIC_API_BASE=https://your-railway-api-url.up.railway.app
```

**Replace with your actual Railway API URL from Part 1, Step 7!**

Example:
```bash
NEXT_PUBLIC_API_BASE=https://carbon-ledger-api-production.up.railway.app
```

⚠️ **Important**: Do NOT include a trailing slash!

### Step 5: Deploy!

1. Click **"Deploy"**
2. Vercel will build and deploy your frontend (~2-3 minutes)
3. Watch the build logs
4. Wait for the green "Success" message

### Step 6: Get Your Frontend URL

Once deployed:
1. Vercel will show you the URL: `https://carbon-ledger-xyz.vercel.app`
2. Click **"Visit"** or copy the URL

### Step 7: Test Your App! 🎉

1. **Visit your Vercel URL**: `https://carbon-ledger-xyz.vercel.app`

2. **Create an account**:
   - Click "Sign Up" / "Register"
   - Email: `test@example.com`
   - Password: `password123`

3. **Login**:
   - Use the credentials you just created

4. **Go to Settings**:
   - Click "Sync Accounts from Nessie"
   - Wait ~5 seconds

5. **Check Transactions**:
   - Navigate to "Transactions"
   - You should see 20 mock transactions
   - Each should have a CO2e estimate! ✅

6. **View Dashboard**:
   - Navigate to "Dashboard"
   - See your carbon footprint charts

7. **Generate Recommendations**:
   - Navigate to "Actions"
   - Click "Generate Recommendations"
   - Wait ~10 seconds (AI is thinking!)
   - See personalized action plan! 🤖

---

## 🎯 **Part 3: Post-Deployment Steps**

### Add Custom Domain (Optional)

**On Vercel**:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS instructions

**On Railway**:
1. Go to API service → Settings → Networking
2. Click "Add Custom Domain"
3. Follow DNS instructions

### Set Up Monitoring

**Railway**:
- View logs: API service → "Logs" tab
- View metrics: API service → "Metrics" tab

**Vercel**:
- View logs: Project → "Deployments" → Click deployment → "Logs"
- View analytics: Project → "Analytics"

### Update Environment Variables

If you need to change any environment variables:

**Railway**:
1. API service → Variables tab
2. Edit or add variables
3. Click "Save"
4. Service will auto-redeploy

**Vercel**:
1. Project Settings → Environment Variables
2. Edit or add variables
3. Click "Save"
4. Trigger new deployment: Deployments → "⋯" → "Redeploy"

---

## 🐛 **Troubleshooting**

### Issue: Railway build fails with "pnpm not found"

**Fix**: Railway should auto-detect pnpm. If not:
1. Go to API service → Settings
2. Add to Build Command: `npm install -g pnpm && <rest of command>`

### Issue: Vercel build fails with "Cannot find module @carbon-ledger/types"

**Fix**: Make sure "Include source files outside Root Directory" is checked
- Project Settings → General → Root Directory → Edit → ✅ Include source files

### Issue: Frontend shows "Failed to fetch" errors

**Fix**: Check your `NEXT_PUBLIC_API_BASE` environment variable
1. Vercel → Project Settings → Environment Variables
2. Verify the URL is correct (no trailing slash)
3. Make sure it's the Railway API URL, not the Vercel URL
4. Redeploy after fixing

### Issue: API returns 500 errors

**Fix**: Check Railway logs
1. Railway → API service → Logs tab
2. Look for error messages
3. Common issues:
   - Database migrations not run → Run `prisma migrate deploy`
   - Missing environment variables → Check Variables tab

### Issue: Database connection errors

**Fix**: Verify DATABASE_URL
1. Railway → API service → Variables
2. Make sure `DATABASE_URL` references the Postgres service
3. Should look like: `postgresql://postgres:...@...railway.app:5432/railway`

### Issue: Cold starts / slow first request

**Fix**: Railway Hobby plan keeps services running
- Railway auto-sleeps on free tier after inactivity
- Upgrade to Hobby plan ($5/mo) for always-on
- Or: Use a service like UptimeRobot to ping every 5 minutes

---

## 💰 **Cost Breakdown**

### Current Setup:
- **Railway**: $5/month (Hobby plan, includes PostgreSQL)
- **Vercel**: $0/month (Hobby plan, generous free tier)
- **Total**: $5/month

### If You Need More:
- **Vercel Pro**: $20/month (custom domains, analytics, more bandwidth)
- **Railway Pro**: $20/month (more resources, priority support)

---

## 🎓 **Next Steps**

### 1. **Secure Your App**
- Change JWT_SECRET to a strong random value
- Set up CORS properly
- Add rate limiting

### 2. **Custom Domain**
- Buy a domain (Namecheap, Google Domains, etc.)
- Add to Vercel and Railway
- Enable SSL (automatic)

### 3. **Monitor Usage**
- Check Echo AI balance: API logs will show usage
- Monitor Railway usage: Dashboard → Usage
- Monitor Vercel bandwidth: Dashboard → Analytics

### 4. **Scale as Needed**
- Railway auto-scales within plan limits
- Vercel auto-scales globally
- Consider upgrading plans if traffic grows

---

## 📚 **Useful Links**

- **Railway Dashboard**: https://railway.app/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Docs**: https://docs.railway.app
- **Vercel Docs**: https://vercel.com/docs
- **Your API URL**: (save this!)
- **Your Frontend URL**: (save this!)

---

## ✅ **Checklist**

Before you start:
- [ ] Code pushed to GitHub
- [ ] Railway account created
- [ ] Vercel account created

Backend (Railway):
- [ ] Project created from GitHub
- [ ] PostgreSQL database added
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] API deployed and tested
- [ ] API URL saved

Frontend (Vercel):
- [ ] Project imported from GitHub
- [ ] Root directory set to `apps/web`
- [ ] `NEXT_PUBLIC_API_BASE` configured
- [ ] Frontend deployed
- [ ] App tested end-to-end

Post-deployment:
- [ ] Create test account
- [ ] Sync accounts from Nessie
- [ ] Generate AI recommendations
- [ ] Custom domain added (optional)
- [ ] Monitoring set up

---

**Congratulations! Your GreenPrint app is live! 🎉🌱**

Questions? Check `TROUBLESHOOTING.md` or the Railway/Vercel docs linked above.

