# Cloudflare Pages & Wrangler Setup Guide

## Overview

This project uses React Router 7 with the Cloudflare Vite plugin to deploy to Cloudflare Workers. The setup allows multiple deployment environments (production, staging) with different configurations.

## Why This Configuration?

### The Challenge
When using build tools like Vite with Cloudflare Workers, the build process creates a **redirected configuration** (`build/server/wrangler.json`). This means:
- You **cannot** use `wrangler deploy --env <name>` directly
- The environment must be selected **during the build phase**, not deployment
- The Cloudflare Vite plugin handles environment selection via the `CLOUDFLARE_ENV` variable

### The Solution
1. Define environments in `wrangler.json`
2. Create `.env.<mode>` files that set `CLOUDFLARE_ENV` to match your wrangler environments
3. Use Vite's `--mode` flag during build to load the correct `.env` file
4. Deploy the built worker with `--env=""` to suppress warnings

## File Structure

### `wrangler.json`
Defines all Cloudflare environments and their configurations:

```json
{
  "vars": {
    // Default/fallback values
  },
  "env": {
    "production": {
      "vars": {
        "SITE_MODE": "waitlist"
      }
    },
    "staging": {
      "vars": {
        "SITE_MODE": "normal"
      }
    }
  }
}
```

### `.env.production`
Tells the Vite plugin to use the `production` environment from `wrangler.json`:

```
CLOUDFLARE_ENV=production
```

### `.env.staging`
Tells the Vite plugin to use the `staging` environment from `wrangler.json`:

```
CLOUDFLARE_ENV=staging
```

## How It Works

### Build Process
1. Run `react-router build --mode staging`
2. Vite loads `.env.staging` which sets `CLOUDFLARE_ENV=staging`
3. The Cloudflare Vite plugin reads `CLOUDFLARE_ENV` and extracts the `staging` environment config from `wrangler.json`
4. Creates `build/server/wrangler.json` with only the staging environment config baked in

### Deployment Process
1. Run `wrangler deploy --env=""`
2. The `--env=""` flag tells wrangler "use the default/top-level environment" (suppresses multi-environment warning)
3. Since the build already baked in the correct environment, this deploys to the right place

## Commands

### Development

**Start dev server (default environment):**
```bash
npm run dev
```

**Start dev server with specific environment:**
```bash
# Staging environment
CLOUDFLARE_ENV=staging npm run dev

# Production environment
CLOUDFLARE_ENV=production npm run dev
```

### Building

**Build for staging:**
```bash
npm run build:staging
```

**Build for production:**
```bash
npm run build:production
```

### Deployment

**Deploy to staging:**
```bash
npm run deploy:staging
```
This runs: `npm run build:staging && wrangler deploy --env=""`

**Deploy to production:**
```bash
npm run deploy:production
```
This runs: `npm run build:production && wrangler deploy --env=""`

## Adding New Environments

1. **Add environment to `wrangler.json`:**
```json
"env": {
  "production": { ... },
  "staging": { ... },
  "development": {
    "vars": {
      "SITE_MODE": "dev"
    }
  }
}
```

2. **Create `.env.development`:**
```
CLOUDFLARE_ENV=development
```

3. **Add npm scripts to `package.json`:**
```json
{
  "build:development": "react-router build --mode development",
  "deploy:development": "npm run build:development && wrangler deploy --env=\"\""
}
```

## Common Issues

### Warning: "Multiple environments are defined"
**Problem:** Running `wrangler deploy` without `--env=""` when you have multiple environments defined.

**Solution:** Always use `--env=""` when deploying a redirected config (built by Vite).

### Error: "You have specified the environment X, but are using a redirected configuration"
**Problem:** Trying to use `wrangler deploy --env production` with a Vite-built config.

**Solution:** Set the environment during **build** via `--mode`, not during deployment. Use `--env=""` for deployment.

### Wrong environment variables deployed
**Problem:** Built with one mode but deployed expecting different vars.

**Solution:** Ensure your build command matches your deploy command (e.g., `build:staging` → `deploy:staging`).

## Resources

- [Cloudflare Vite Plugin - Environments](https://developers.cloudflare.com/workers/vite-plugin/reference/cloudflare-environments/)
- [Wrangler Configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [React Router Deployment](https://reactrouter.com/start/framework/deployment)
