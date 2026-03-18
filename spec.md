# KlassApp Landing Page

## Current State
The app has a LandingPage at `/` and BrandKitPage at `/branding`. There is no `/register` route. Logo files exist at `/assets/klassapp-logo-v1-1.png`.

## Requested Changes (Diff)

### Add
- New `RegisterPage` component at `src/frontend/src/pages/RegisterPage.tsx`
- Route `/register` pointing to RegisterPage in App.tsx

### Modify
- App.tsx: add the register route

### Remove
- Nothing removed

## Implementation Plan
1. Create RegisterPage with full-viewport split layout (left brand panel, right form panel)
2. Left panel: dark navy bg, KlassApp logo top-left, centered brand copy, trust checkmarks, subtle texture
3. Right panel: white/near-white bg, registration form with 9 fields + terms checkbox
4. Fields: School Name, Your Full Name, Your Role (select), Mobile Number, Country (select), Student Count (select), Email, Password (with toggle), Confirm Password (with toggle)
5. Form styling per spec: white bg inputs, #E2E8F0 border, focus -> #1E6FD9 glow
6. CTA button: green #22C55E, full width, "Create my free account"
7. Below button: lock icon + trial text + sign-in link
8. Mobile: hide left panel, show logo above form, light bg
9. Register the route in App.tsx
