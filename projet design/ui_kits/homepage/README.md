# Homepage — UI Kit

The commercial landing at `moonbundles.io/`. More formal than the lead-magnet template (vouvoiement), aimed at merchants evaluating the app.

## Structure

```
Navbar        Sticky, transparent at top, blurred navy at scroll. Logo + links + FR/EN + install.
Hero          Pill badge → huge H1 with gradient punchline → sub → CTAs → stacked 3-image fan + stats row.
Features      6-card responsive grid. One "highlighted" card with a soft blue orb behind it.
Testimonials  4-card review grid, stars + flag avatar + name/role.
Comparison    7-row table showing Moonbundles vs apps-séparées (Bundle Bear, Volume++, Cart Uplift, ReConvert).
FinalCta      Gradient-bordered box, final pitch + install CTA + risk reversal.
Footer        4-column; brand blurb + Produit / Ressources / Entreprise columns.
```

Container widths: `max-w-1180` nav and features, `max-w-940` hero, `max-w-1000` comparison, `max-w-980` final CTA.

## Components

| File | Exports |
| --- | --- |
| `Primitives.jsx` | `Logo`, `Pill`, `PrimaryCta`, `GhostCta` |
| `Navbar.jsx` | `Navbar` |
| `Hero.jsx` | `Hero` (+ internal `HeroShowcase`, `Stat`) |
| `Features.jsx` | `Features` |
| `Testimonials.jsx` | `Testimonials` |
| `Comparison.jsx` | `Comparison`, `FinalCta`, `Footer` |

All mount on `window.HP`.

## Interactions

- Navbar transitions to blurred navy at `scrollY > 20`.
- Hero product images float on a 7s cycle with staggered delays.
- Feature cards lift by 3px and brighten their border on hover.
- Primary CTAs scale to 1.02 and brighten their glow on hover.

## Tone

Vouvoiement, more polished than the lead-magnet template. Still direct, still mobile-first, still topped and tailed with social-proof lines.

## What's deliberately omitted

- No `framer-motion` entrance animations — CSS keyframes only.
- No live language switcher.
- No `Affiliate` / `SocialProof` / `FunnelSection` blocks from the prod site — they sit between Testimonials and Comparison and can be added by copying the pattern of `Features.jsx`.
