# Moonbundles — Design System

Moonbundles is an **all-in-one Shopify app** to grow AOV: product **Bundles**, **Cart Drawer**, **Post-Purchase Upsells**, **Volume Discounts** and **Free Gifts**. Rated **5.0/5** on the Shopify App Store (448+ reviews) and used by **1,200+ merchants**.

The public surface is bilingual (**French / English**) and optimized for acquisition through Twitter/X + WhatsApp DMs → single-page **lead-magnet** funnels (persona prompts, native-ads guide, CRO checklist, onboarding reveal) → Shopify install with promo code **`4K4MZMMS69`** (20% off).

- Domain: `moonbundles.io`
- Install URL: `https://apps.shopify.com/moonbundle` (routed through `/api/go?from=<page>` for attribution)
- WhatsApp: `https://wa.me/33670438611`
- Author: Bambino — `@bambino_moon`

## Sources

- **Codebase** (attached, read-only via local mount): `Moonbundle LP/moonbundles-landing/`
  - Next.js 15 + Tailwind v4 + Framer Motion
  - Key reads: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`
  - Components: `src/components/**` (Hero, Navbar, Features, Comparison, CTA, Footer, Testimonials)
  - Lead-magnet pages: `src/components/native-ads/`, `src/components/checklist/`, `src/app/affiliate/`
  - i18n dictionary: `src/lib/i18n/translations.ts` (full FR + EN copy deck)
- **Assets** (attached, copied to `assets/`): logo, favicon, shopify glyph, 6 feature screenshots.
- **Brand brief**: the "Moonbundles — Direction Artistique complète" doc (tone, palette, type, motion, lead-magnet patterns).

---

## Content fundamentals

**Audience.** Shopify e-commerce operators — dropshippers, DTC brands, agencies. Mostly mobile (80% traffic). Reached through Twitter and WhatsApp.

**Voice.** Direct, sharp, operator-to-operator. No corporate filler. Tutoiement (informal "tu") on every lead-magnet page; vouvoiement (formal "vous") only on the main commercial homepage.

**Franglais is intentional.** Keep English metric/jargon inline in French copy: *AOV, bundle, upsell, cart drawer, checkout, CAC, LTV, post-purchase, A/B test*. But translate verbs: **"configurer"** (not setup), **"enregistrer"** (not track), **"partager"** (not split).

**Banned phrases.** "proposition de valeur", "transformation digitale", "dans un monde où", "n'est-ce pas ?", "solution clé en main", "synergie", any generic AI-slop pivot.

**Sentence shape.**
- Short. 15 words max.
- Em-dash payoff pattern: *X. Y. Z — Z est le payoff.*
- First-person CTAs: **"Je veux doubler mon AOV"** > "Installer Moonbundles".
- Highlights inline with `**word**` → rendered as `<span class="hl-blue">` (blue-accent, semibold).

**Social proof, always present.** Rotating through: `448+ avis`, `5.0/5`, `Built for Shopify`, `1 200+ stores actifs`.

**Examples pulled from the codebase.**
- Hero: *"Boostez votre AOV **à chaque étape**"* — last word gradient.
- Feature tagline: *"Un panier latéral qui vend pour vous."*
- Checklist diss: *"**Café aux champignons adaptogènes bio** personne en veut. **Retrouve ton énergie sans nervosité en 14 jours** tout le monde veut essayer."*
- Risk reversal under every CTA: *Sans carte bancaire · Plan gratuit · Annulable à tout moment.*

**Emoji.** Not part of the brand system. One exception: flag emojis (🇫🇷 🇬🇧 🇺🇸) on testimonial avatars. Otherwise, use inline SVGs.

---

## Visual foundations

**Palette.** Navy-dominant, never black. Base `#0a1628`; optionally a top-left → bottom-right gradient through `#162044 → #1a2a5e`. Single primary accent **`#4d7cff` blue**, paired with **`#7c5cff` violet** only for gradient highlights and the major punchline word. Never more than one gradient per screen.

**Text.** Satoshi (heading, 400/500/700/900) + Plus Jakarta Sans (body, 400/500/600/700). Numbers always use `tabular-nums` + heading family. Never Inter, Roboto, system-ui.

**Backgrounds are layered:**
1. Flat `#0a1628` body,
2. Fixed **grain** overlay (SVG fractal noise, `opacity 0.025`) — applied to `<body>` via `.grain` class,
3. Radial **dot-grid** (`rgba(255,255,255,0.04)` dots every 40px),
4. 1–2 blurred gradient **orbs** (blue and violet, `blur(100–120px)`, pulse-glow 4s).

**Glass cards.** Every content block is `rgba(255,255,255,0.03)` with a `1px rgba(255,255,255,0.06)` border, `backdrop-blur(20px)`, `border-radius: 20px`. Hover lifts background to `0.05` and border to `0.12`. Padding scales `p-6 → p-8 → p-10`.

**Radii.** `8px` (tags, tiny chips), `12px` (buttons, inputs), `16–20px` (cards), `24px` (hero containers), `9999px` (pills, avatars, CTAs).

**Borders.** Subtle white translucent. Accent borders always at low alpha: `rgba(77,124,255,0.20–0.30)`. Never hard solid lines except inside table cells.

**Shadows.** No drop shadows under cards — the depth comes from **glows**. Inner glows for badges (`inset 0 0 12px rgba(77,124,255,0.05)`), outer glows for primary buttons on hover (`0 0 40px rgba(255,255,255,0.25)`), soft box-shadow only on hero showcase images (`0 20px 60px rgba(0,0,0,0.5)`).

**Animation.** Everything eases with `cubic-bezier(0.22, 1, 0.36, 1)` (canonical ease-out). Entries use `y: 30 → 0, opacity 0 → 1` over 0.4–0.6s, stagger hero words by 0.08s. Scroll reveals use `whileInView` with `margin: -60px`. Scale bounces use `cubic-bezier(0.34, 1.56, 0.64, 1)`. Orbs use `pulse-glow` (opacity 0.4↔0.7, scale 1↔1.05, 4s infinite). Hero images use `float` (±12px, 6–8s infinite).

**Hover states.**
- Buttons: `scale(1.02)` + accent-colored glow ring.
- Glass cards: `translateY(-4px)` + brighter border.
- Links: `text-muted → text-white` 300ms.
- White CTA: shine sweep (`::after` diagonal, `translateX(-100% → 100%)` over 0.7s).

**Press states.** Subtle `scale(0.98)` or instant color shift — no heavy depression.

**Transparency & blur.** Backdrop-blur(20px) on every glass surface. Navbar blurs when scrolled (`bg-navy-900/80`). Modals blur background. Never layer more than 2 blurred surfaces.

**Imagery vibe.** App UI screenshots only — cool-toned, navy frames around product UI. No lifestyle photography, no illustration, no hero portraits. Screenshots sit on `bg-navy-800` with `border-white/10`.

**Layout rules.**
- Mobile-first. All lead-magnet pages must be immaculate at 375px.
- Lead-magnet container: `max-w-[680px]`, `px-5 py-10 → lg:py-20`.
- Home container: `max-w-7xl` (nav) / `max-w-5xl` (hero) / `max-w-6xl` (sections).
- Sticky mobile CTA (`md:hidden`) appears after hero scroll, disappears at main CTA.
- Section rhythm: `py-24 → sm:py-32`.

**Decorative flourishes:** faint vertical gradient lines (`w-px bg-gradient-to-b from-blue-accent/20 via-transparent to-blue-accent/20`) at `left-[15%]` / `right-[15%]` inside hero and CTA boxes — sometimes with a motion-animated pulse sliding along them.

---

## Iconography

**Inline SVG, stroke-based, always.** No icon font, no PNG icons, no emoji. Style locked to:

- `viewBox="0 0 24 24"`
- `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`
- `stroke-linecap="round"`, `stroke-linejoin="round"`
- Rendered at `h-4 w-4` (16px) inline with text, `h-5 w-5` in buttons.

**Vibe** matches Lucide / Feather exactly — in fact the set in the codebase **is** a hand-picked subset. For anything not already authored, pull from **[Lucide](https://lucide.dev/)** (CDN `https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/`). Stroke 2, round caps — it matches the existing set pixel-perfectly.

**Icons already used:**
- `download` (step "Télécharger le prompt")
- `external-link` (step "Aller sur Nanobanana")
- `zap` (bolt; speed-suggestion before CTA text)
- `arrow-right` (progression)
- `check` (completion — `polyline 20 6 9 17 4 12`)
- `shopping-cart`, `box`, `bar-chart`, `gift`, `target` (features)
- `chevron-right`, `plus`, `minus`, `x`, `menu` (UI)

**Brand glyphs & exceptions.**
- **WhatsApp logo** — official bubble path at fill `#25D366` (see `assets/icons/whatsapp.svg`).
- **Shopify bag** — the official PNG glyph at `assets/shopify.png` is the only raster icon on the page. Used inside primary CTA buttons.
- **Flags** — hand-drawn SVG rects (FR: 3 stripes; GB: clipped Union Jack construction). See `assets/icons/flag-fr.svg`, `flag-gb.svg`.
- **Logo mark** — `assets/logo.png` (circular moon + bundle ribbon). Always paired with word-mark "Moonbundles" in Satoshi 700.

**Unicode used as micro-glyphs.** `★` for ratings, `→` and `▶` for CTA ornaments, `·` as separators, em-dash `—` as payoff connector. That's it.

---

## File index

```
README.md                 — this file (vision + fundamentals)
SKILL.md                  — agent-skill manifest
colors_and_type.css       — CSS variables for palette, type, radii, spacing, easings
assets/                   — logos, favicon, shopify glyph, 6 feature screenshots, icons/
preview/                  — small HTML cards rendered in the Design System tab
ui_kits/
  lead-magnet/            — single-page lead-magnet template (checklist example)
  homepage/               — main commercial landing (hero + features + CTA)
```

Each UI kit has its own README + `index.html` + JSX component files.
