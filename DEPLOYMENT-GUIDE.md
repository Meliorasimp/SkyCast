# 🚀 SkyCast Deployment Guide - Vercel & Render

This guide will help you deploy SkyCast with the frontend on Vercel and backend on Render.

## 📋 Prerequisites

- [GitHub](https://github.com) account with your SkyCast repository
- [Vercel](https://vercel.com) account
- [Render](https://render.com) account
- Your API keys ready

## 🎯 Deployment Strategy

- **Frontend (React)**: Vercel (Free tier)
- **Backend (Node.js API)**: Render (Free tier)

## 🖥️ Backend Deployment on Render

### Step 1: Prepare Your Repository

1. Commit and push all changes to your GitHub repository
2. Make sure your `server/.env.example` contains your API keys

### Step 2: Deploy to Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account and select your SkyCast repository
4. Configure the service:

   **Service Details:**

   - **Name**: `skycast-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your preferred branch)

   **Build & Deploy:**

   - **Build Command**: `npm run build`
   - **Start Command**: `npm run serve`

   **Environment Variables:**
   Add these in the Render dashboard:

   ```
   NODE_ENV=production
   PORT=10000
   OPENWEATHERMAP_API_KEY=1f7b40a18badbcc5797091f81c0f491c
   RAPIDAPI_KEY=7f4201ee75msh77dd02cb513ed4fp1226bfjsnf9fbfebfb40f
   WEATHERAPI_KEY=4f88f57ae56b4a8990251233252410
   FRONTEND_URL=https://your-app-name.vercel.app
   ```

5. Click **"Create Web Service"**
6. Wait for deployment to complete
7. Note your Render URL: `https://your-service-name.onrender.com`

### Step 3: Test Backend

Visit: `https://your-service-name.onrender.com/api/health`
You should see: `{"status":"healthy","timestamp":"...","service":"SkyCast API","version":"1.0.0"}`

## 🌐 Frontend Deployment on Vercel

### Step 1: Update API URL in Client

Create an environment configuration for production API URL:

1. Create `client/.env.production`:
   ```
   VITE_API_URL=https://your-render-service.onrender.com
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"New Project"**
3. Import your SkyCast repository
4. Configure the project:

   **Project Settings:**

   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm ci`

   **Environment Variables:**
   Add in Vercel dashboard:

   ```
   NODE_ENV=production
   VITE_API_URL=https://your-render-service.onrender.com
   ```

5. Click **"Deploy"**
6. Wait for deployment to complete
7. Note your Vercel URL: `https://your-app-name.vercel.app`

### Step 3: Update Backend CORS

Update the `FRONTEND_URL` environment variable in Render with your actual Vercel URL.

## 🔗 Final Configuration

### Update Render Backend:

1. Go to your Render service dashboard
2. Go to **Environment** tab
3. Update `FRONTEND_URL` to your actual Vercel URL
4. The service will automatically redeploy

### Test Full Application:

1. Visit your Vercel URL
2. Test all features (weather data, explore, marine, etc.)
3. Check browser console for any CORS errors

## 📊 Monitoring & Maintenance

### Health Checks:

- **Backend**: `https://your-render-service.onrender.com/api/health`
- **Frontend**: `https://your-vercel-app.vercel.app/health`

### Render Free Tier Limitations:

- Service may sleep after 15 minutes of inactivity
- First request after sleep may take 30+ seconds
- Consider upgrading to paid tier for production use

### Vercel Free Tier:

- Unlimited bandwidth
- 100GB-hours of compute per month
- Automatic HTTPS and CDN

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors:**

   - Verify `FRONTEND_URL` in Render matches your Vercel URL exactly
   - Check browser developer tools for specific CORS messages

2. **API Not Responding:**

   - Render free tier services sleep after inactivity
   - Visit health check endpoint to wake up the service
   - Check Render logs for errors

3. **Build Failures:**

   - Check that all dependencies are in `package.json`
   - Verify build commands are correct
   - Check build logs in platform dashboards

4. **Environment Variables:**
   - Ensure all required environment variables are set
   - Restart services after adding new environment variables

### Useful Commands for Debugging:

```bash
# Check API health
curl https://your-render-service.onrender.com/api/health

# Test specific endpoints
curl https://your-render-service.onrender.com/api/forecast

# Check frontend build locally
cd client && npm run build && npm run preview
```

## 🔄 Continuous Deployment

Both Vercel and Render are configured for automatic deployment:

- **Push to main branch** → Automatic deployment
- **Pull requests** → Preview deployments (Vercel)
- **Environment changes** → Manual redeploy required

## 🌟 Production Optimizations

### Performance:

- ✅ Gzip compression enabled
- ✅ Static asset caching
- ✅ Code splitting configured
- ✅ Minification enabled

### Security:

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ CORS properly configured
- ✅ Environment variables secured

### Monitoring:

- ✅ Health check endpoints
- ✅ Error logging
- ✅ Build status monitoring

## 🎉 You're Ready!

Your SkyCast application is now deployed and ready for production use!

- **Frontend**: Fast, global CDN via Vercel
- **Backend**: Scalable API via Render
- **Security**: HTTPS, CORS, and security headers
- **Monitoring**: Health checks and logging
