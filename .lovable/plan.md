

# Premium eCommerce Landing Page Upgrade

## What Already Exists
The site already has: WhatsApp floating button, product cards with prices and "Add to Cart", scroll animations via IntersectionObserver, hero section with background image/tagline, dark mode CSS variables (`.dark` class defined), sticky navbar, and all major sections (About, Products, Reviews, Contact).

## What Needs to Be Added/Improved

### 1. Dark Mode Toggle
- Add a `ThemeProvider` context to manage `dark` class on `<html>`
- Add a Sun/Moon toggle button in the Header (desktop nav + mobile menu)
- Persist preference in `localStorage`

### 2. Simple Cart/Checkout UI (No Backend)
- Create a `CartContext` with React context to manage cart state (add, remove, update quantity)
- Create a `CartDrawer` component (slide-in sheet from right) showing cart items, quantities, total
- "Checkout" button sends the full order summary to WhatsApp
- Update `ProductCard` "Add to Cart" to use the cart context (currently just shows a toast)
- Add a cart icon with item count badge in the Header

### 3. Enhanced Hero Section
- Add a gradient overlay on the hero for better text contrast
- Add a subtle animated counter/stats strip below the hero CTA (e.g., "1000+ Happy Customers | 4 Flavors | Free Delivery")
- Add a pulsing "Limited Stock" or "Order Today" urgency badge

### 4. Smoother Animations (Framer Motion Style)
- Add new keyframes: `slide-up`, `slide-in-left`, `blur-in` to tailwind config
- Add stagger delays with CSS custom properties for card grids
- Add a parallax-like subtle background movement on hero scroll
- Enhance hover effects on product cards with lift + glow

### 5. Premium UI Polish
- Add a promotional banner/ticker strip at top of page ("Free delivery on orders above ₹500!")
- Add countdown or "Today's Special" highlight on featured products
- Upgrade CTA buttons with gradient backgrounds and micro-animations
- Add a "Bestseller" badge variant for top products

## Technical Details

### Files to Create
- `src/contexts/ThemeContext.tsx` — Dark mode provider with localStorage persistence
- `src/contexts/CartContext.tsx` — Cart state management (items, add, remove, total)
- `src/components/CartDrawer.tsx` — Slide-in cart panel using Sheet component
- `src/components/ThemeToggle.tsx` — Sun/Moon toggle button
- `src/components/PromoBanner.tsx` — Top promotional ticker strip

### Files to Modify
- `src/App.tsx` — Wrap with ThemeProvider and CartProvider
- `src/components/Header.tsx` — Add ThemeToggle + cart icon with badge
- `src/components/ProductCard.tsx` — Connect "Add to Cart" to CartContext
- `src/components/HeroSection.tsx` — Add stats strip, urgency badge, gradient overlay
- `src/components/ProductsSection.tsx` — Add "Bestseller" badge to first product
- `src/pages/Index.tsx` — Add PromoBanner
- `tailwind.config.ts` — Add new animation keyframes (slide-up, blur-in)
- `src/index.css` — Add gradient button utilities, glow effects

### No New Dependencies
Everything uses existing shadcn Sheet component, React context, CSS animations, and Tailwind utilities.

