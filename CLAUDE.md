# CallKaira Web - Public Marketing Website

## Project Overview

CallKaira Web is the public-facing marketing website for CallKaira, an AI-powered 24/7 voice answering service for UK small businesses. This React Router v7 application serves as the primary marketing site and customer onboarding interface.

**Brand Identity:** "Always answers. Always cheerful" - Fun, approachable, reliable, professional, simple, smart, and efficient.

## Architecture

This repository is part of the CallKaira ecosystem:

1. **CallKaira Web** (this repository) - Marketing website and onboarding flow
2. **CallKairaApp** (`call-kaira-app/`) - Laravel backend API and user portal ("Reception")
3. **VoiceServer** (`voice-server/`) - Real-time voice processing server
4. **Commons** (`call-kaira-common/`) - Shared PHP library

## Technical Stack

- **Framework:** React Router v7 with React 19
- **Build Tool:** Vite 7 for fast development and optimized builds
- **Deployment:** Cloudflare Pages with Workers
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React for consistent iconography
- **API Client:** Hey-API for type-safe API generation (to be implemented)
- **TypeScript:** Full type safety across the application

## Key Features

### Marketing Website
- **Hero Section** - Compelling value proposition with interactive demo
- **Pain Points** - Addresses common small business phone challenges
- **Solutions** - Detailed explanation of service benefits
- **How It Works** - Clear process explanation
- **Professions Focus** - Industry-specific messaging
- **Pricing Plans** - Transparent tiered pricing
- **FAQ Section** - Common customer questions
- **Watch Demo** - Video demonstrations of the service

### Customer Onboarding Flow
- **Step 1:** Business selection and country configuration
- **Step 2:** Business details and customization
- **Step 3:** Phone number setup
- **Step 4:** AI personality configuration
- **Step 5:** Account creation and confirmation

## File Structure

```
app/
├── components/           # Reusable UI components
│   ├── Hero.tsx         # Main hero section
│   ├── FAQ.tsx          # Frequently asked questions
│   ├── Footer.tsx       # Site footer
│   ├── Navbar.tsx       # Main navigation
│   ├── Pricing.tsx      # Pricing tiers
│   ├── ui/              # Base UI components
│   └── ...
├── contexts/            # React contexts
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── routes/             # React Router routes
│   ├── _index.tsx      # Home page
│   └── ...             # Other routes (to be added)
├── entry.server.tsx    # Server entry point
└── root.tsx           # Application root

public/                 # Static assets
workers/               # Cloudflare Workers functions
```

## Routes Structure (To Be Implemented)

- `/` - Home page (marketing)
- `/solutions` - Solutions overview
- `/pricing` - Pricing page
- `/built-for-you` - Industry-specific landing
- `/watch-demo` - Demo videos
- `/onboarding` - Onboarding flow root
- `/onboarding/step-1` - Business selection
- `/onboarding/step-2` - Business details
- `/onboarding/step-3` - Phone setup
- `/onboarding/step-4` - AI configuration
- `/onboarding/step-5` - Confirmation

## API Integration

The application integrates with CallKairaApp backend for:
- Business lookup and validation
- Onboarding data submission
- User authentication (session-based)
- Twilio phone number provisioning
- Subscription and billing setup

API client will be generated using Hey-API for type safety.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build:production

# Deploy to Cloudflare Pages
npm run deploy:production
```

## Environment Configuration

- `.env.production` - Production environment variables
- `.env.staging` - Staging environment variables
- `.dev.vars` - Local development variables

## Design System

### Colors (Cerise Theme)
- Primary: `valencia-500` (#e82e71) - Brand color
- Supporting: Gray scale for text and backgrounds

### Typography
- **Headings:** Lexend font family
- **Body Text:** Poppins font family

### Components
- Tailwind CSS v4 utility-first styling
- Responsive mobile-first design
- Consistent rounded corners and shadows

## Deployment

The application is deployed to Cloudflare Pages:
- Production: www.callkaira.com
- Staging: staging.callkaira.com

Deployment happens automatically via GitHub integration or manual deployment using Wrangler.

## Migration Status

### ✅ Completed:
- **Public Pages:** Solutions, Pricing, Built For You, Watch Demo - all migrated and working
- **Onboarding Flow:** All 5 steps fully migrated with React Router navigation
  - Step 1: Business selection with country picker and business search
  - Step 2: Website analysis and AI extraction
  - Step 3: Call handling features configuration
  - Step 4: Business information and FAQs
  - Step 5: Test call and feedback collection
- **API Client:** Hey-API setup in `app/app-client/`
- **Services Layer:** Copied to `app/services/` for API integration
- **Components:** All onboarding components migrated and imports updated
- **Shared Code:** Logo, LogoType, utilities from `@mfullbrook/call-kaira-frontend-commons`
- **Supporting Components:** BusinessPicker, CountryPicker, LearningProgress, OnboardingProgress, OnboardingBackground

### 🔄 Next Steps (API Integration):
- Wire up API calls in onboarding forms (currently have placeholder TODOs)
- Connect to Laravel backend endpoints for:
  - Business data submission
  - Website crawling
  - Configuration saves
  - Test call initiation
- Add authentication/session management for seamless transition to authenticated areas
- Add proper error handling and validation feedback

### 📝 Implementation Notes:
- All forms use standard React form submission instead of Inertia.js
- Navigation uses React Router `useNavigate()` instead of Inertia `router.visit()`
- Shared utilities (Country, Place, locale functions) imported from `@mfullbrook/call-kaira-frontend-commons`
- API service layer ready in `app/services/` for integration
- All components follow React Router v7 patterns