# Piinacle Caakery — Demo v1 (Evenlyn Studio)

Demo website for **Piinacle Caakery** (Preity Goyaal), a 100% eggless home
baker in Rohini, Delhi. She replied "Ok share" to our WhatsApp pitch on
2026-11-05 and was promised a demo the next day.

## Pages (6)
- `/` Home — hero, occasions, signature cakes, hampers teaser, how to order
- `/cakes` Menu — Birthday, Wedding, Anniversary, Baby Milestone, Theme, Signature
- `/hampers` Diwali Hampers 1–11 (₹500–₹1,900 — the only verified prices)
- `/custom-orders` 3-step ordering + event dessert tower
- `/about` About Preity
- `/contact` Visit — address, hours, WhatsApp, Instagram, Google Maps pin

## Rules followed
- **No invented prices.** All cakes: "Price on request — enquire on WhatsApp".
  Only hamper prices are shown (₹500–₹850 for Hampers 1–6, ₹900–₹1,900 for
  Hampers 7–11), exactly as published in her Diwali carousel.
- **Per-product WhatsApp buttons.** Every cake/hamper card's order button
  opens WhatsApp with a pre-filled message for that exact product (name,
  occasion/category, price where known; cakes ask for price & sizes).
  Tapping a cake or hamper card opens a detail view (modal) with description,
  occasion, eggless note and the same per-product order button.
- **WhatsApp entry point:** only the sticky icon-only floating button
  (bottom-right, every page). No WhatsApp button in the navbar.
- **Cake-vibe UI:** warm cream + blush pink + gold, Playfair Display serif,
  soft rounded shapes, gentle hero bob, sprinkle accents, frosting-wave
  dividers, slow tagline marquee ("Freshly Baked. Eggless. Made with Love.").
  Animations respect `prefers-reduced-motion`.
- Sample photos only (Unsplash), each labelled "Sample photo". "Demo v1"
  marker + "Demo preview by Evenlyn Studio".

## Run / deploy
```bash
npm install
npm run build   # or: npm run dev
```
Deploy on Vercel as a standard Next.js app (no env vars needed).

## Still to confirm with Preity (see RESEARCH.md §8)
Real photos, cake prices, flavour list, hours (10 vs 11 AM), delivery areas,
lead time, minimum order, payment methods, hampers after Diwali, name spelling.
