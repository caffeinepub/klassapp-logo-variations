# KlassApp Landing Page

## Current State
The project has all brand assets generated and available in `/assets/generated/`. The backend is a minimal Motoko canister. No frontend pages exist yet -- the previous build attempt failed.

## Requested Changes (Diff)

### Add
- Landing page (`/`) with: sticky header, hero section, features section, social proof/stats, pricing section, CTA section, footer
- Brand Kit page (`/branding`) containing the full brand kit UI from the previous project (all logos, social assets, post templates, colors, typography, guidelines, download buttons)
- "Our Branding" link/button in the landing page footer that navigates to `/branding`
- React Router for multi-page navigation

### Modify
- Nothing (fresh build)

### Remove
- Nothing

## Implementation Plan
1. Set up React Router with two routes: `/` (LandingPage) and `/branding` (BrandKitPage)
2. Build LandingPage component: sticky header with logo, hero, features, stats, pricing, CTA, footer with "Our Branding" link
3. Build BrandKitPage component: port full brand kit UI from old App.tsx including all download functionality
4. Ensure all image paths reference existing generated assets
