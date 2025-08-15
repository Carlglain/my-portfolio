# Automatic Deployment Setup Guide

This guide will help you set up automatic deployment of your portfolio website using GitHub Actions and Vercel.

## Prerequisites

- Your code is pushed to a GitHub repository
- You have a Vercel account (free at [vercel.com](https://vercel.com))

## Step 1: Create Vercel Project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" to create your first deployment

## Step 2: Get Vercel Credentials

After your first deployment, you need to get these credentials:

### Get Vercel Token:

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Give it a name like "GitHub Actions"
4. Copy the token (you'll only see it once!)

### Get Project ID:

1. Go to your project dashboard on Vercel
2. Click on "Settings" tab
3. Scroll down to "General" section
4. Copy the "Project ID"

### Get Organization ID:

1. In your project settings, look for "General" section
2. Copy the "Team ID" (this is your organization ID)

## Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" tab
3. Click "Secrets and variables" → "Actions"
4. Add these secrets:
   - `VERCEL_TOKEN`: Your Vercel token from Step 2
   - `PROJECT_ID`: Your project ID from Step 2
   - `ORG_ID`: Your organization ID from Step 2

## Step 4: Test the Deployment

1. Make a small change to your code
2. Commit and push to your main branch
3. Go to your GitHub repository → "Actions" tab
4. You should see the deployment workflow running
5. Check your Vercel dashboard for the new deployment

## How It Works

- Every time you push to `main` or `master` branch, GitHub Actions will:
  1. Checkout your code
  2. Install dependencies
  3. Build your Next.js project
  4. Deploy to Vercel

## Troubleshooting

### If deployment fails:

1. Check the GitHub Actions logs for errors
2. Verify your Vercel credentials are correct
3. Make sure your project builds locally with `npm run build`

### If you need to redeploy:

- Simply push any change to your main branch
- Or manually trigger the workflow from GitHub Actions tab

## Alternative: Direct Vercel Integration

If you prefer, you can also:

1. Connect your GitHub repo directly in Vercel dashboard
2. Vercel will automatically deploy on every push
3. This is simpler but gives you less control over the build process

## Support

- GitHub Actions documentation: https://docs.github.com/en/actions
- Vercel documentation: https://vercel.com/docs
- Next.js deployment: https://nextjs.org/docs/deployment
