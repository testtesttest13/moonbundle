---
name: moonbundles-design
description: Use this skill to generate well-branded interfaces and assets for Moonbundles — a Shopify app for Bundles, Cart Drawer and Post-Purchase Upsells. Contains essential design guidelines (navy + grain + glass), colors, typography (Satoshi + Plus Jakarta Sans), Lucide-style iconography, product screenshots, and two UI kits (lead-magnet single-page funnel + commercial homepage).
user-invocable: true
---

# Moonbundles Design Skill

Read `README.md` first — it covers the brand, content fundamentals, visual foundations and iconography. Then browse the other files below.

## Files

```
README.md                    High-level context + CONTENT / VISUAL / ICONOGRAPHY sections
colors_and_type.css          CSS variables for palette, type, radii, spacing, gradients, glows, eases
assets/                      logo.png, favicon.png, shopify.png, 6 product screenshots, icons/
preview/                     ~21 design-system cards (colors, type, spacing, components)
ui_kits/
  lead-magnet/               Single-page funnel (mobile-first, 680px container)
  homepage/                  Commercial landing (1180px, FR vouvoiement)
```

## How to use

- **Throwaway prototype or design mock:** copy `colors_and_type.css` and whatever assets you need into a new HTML file. Pattern-match from `ui_kits/*/*.jsx` for components. Keep the glass-card + grain + navy formula — never invent a new visual vocabulary.
- **Production code (Next.js / Tailwind):** the variables in `colors_and_type.css` map 1:1 to what's already declared in the real codebase (`Moonbundle LP/moonbundles-landing/src/app/globals.css`). Use `bg-navy-900`, `text-blue-accent`, `rounded-2xl` etc.
- **When copy is needed:** write in French by default (tutoiement for lead-magnets, vouvoiement for the home page). Keep the English metric jargon inline (`AOV`, `cart drawer`, `upsell`, `post-purchase`). Short sentences, em-dash payoffs, `**word**` highlights become blue-accent semibold.

## Non-negotiables

1. **Navy base** — `#0a1628` body, never pure black.
2. **Grain overlay + dot-grid** — always. It's what makes the surface feel like Moonbundles and not a generic SaaS dark theme.
3. **Glass cards** — `rgba(255,255,255,0.03)` surface + `rgba(255,255,255,0.06)` border + `backdrop-blur(20px)` + `rounded-[20px]`. Hover bumps both alphas.
4. **One primary accent** — `#4d7cff`. `#7c5cff` only appears as the second stop in the highlight gradient. Never as a solid fill.
5. **Fonts** — Satoshi headings + Plus Jakarta Sans body. Numbers get `tabular-nums` + Satoshi. Never Inter / Roboto / system-ui.
6. **Icons** — inline SVG, stroke 2, round caps. Match the Lucide set. No PNG icons except `assets/shopify.png`.
7. **Every CTA surface** must carry: promo code `4K4MZMMS69`, countdown to midnight, risk-reversal line (`Sans carte bancaire · Plan gratuit · Annulable à tout moment`), and social proof (`5.0/5 · 448+ avis · 1 200+ stores`).
8. **Mobile-first** — 375px baseline. Lead-magnet pages pin a sticky `-20%` CTA at the bottom once the user scrolls past the hero.

## When invoked without a specific task

Ask the user what they want to build — a lead-magnet landing, a feature page, a pitch deck, a social-card, a blog post cover? Then ask:

- FR or EN? (FR default)
- Lead-magnet funnel (tutoiement) or commercial page (vouvoiement)?
- Do they want the sticky mobile CTA + countdown + promo code block?
- Any specific product feature to highlight (Bundles / Cart Drawer / Post-Purchase / Volume / Free Gift)?

Then act as an expert designer, outputting a single HTML file that imports `colors_and_type.css` and references assets in `assets/`. Reuse the component patterns from `ui_kits/`.
