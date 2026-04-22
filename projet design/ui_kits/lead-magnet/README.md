# Lead Magnet — UI Kit

Single-page funnel template used for `/native-ads-guide`, `/checklist`, `/value-offer`, `/2026`, `/prompts`. Tuned for mobile-first (375px baseline). Viewers land from a Twitter DM → WhatsApp link.

## Structure

```
Header       Logo top-left + language flag (no nav).
Hero         Eyebrow pill · H1 with gradient punchline word · Muted subtitle.
Steps        Stack of glass cards numbered 01, 02, 03. Each card has a counter, title, description, and either a mini-CTA (download / external) or a "done" check.
CtaBox       Gradient-bordered box. Countdown → punchline H3 → promo code box → primary white CTA with bolt + arrow → risk reversal → social proof.
WhatsAppCard Glass card with a WhatsApp button on the right. "Une question ? On t'aide à configurer tes offres."
Footer       Moonbundles by Bambino · @bambino_moon · Built for Shopify.
StickyMobileCta  Bottom bar visible after 400px scroll, hides above that. -20% label + red ping + "Installer" button.
```

Container: `max-w-[680px]` with `px-6`.

## Components

| File | Exports |
| --- | --- |
| `Primitives.jsx` | `Logo`, `Badge`, `GlassCard`, `Counter`, `BoltIcon`, `ArrowIcon`, `CheckIcon`, `WhatsAppIcon`, `CopyIcon` |
| `Header.jsx` | `Header`, `Hero` |
| `Steps.jsx` | `Steps` |
| `CtaBox.jsx` | `CtaBox` |
| `Extras.jsx` | `WhatsAppCard`, `Footer`, `StickyMobileCta` |

All components mount on `window.LM` so any Babel script file can `const { X } = window.LM;`.

## Interactions

- Clicking the **Copier** button copies the promo code `4K4MZMMS69` to the clipboard and flashes green.
- The countdown ticks down to local midnight.
- Primary CTA scales to 1.02 + brightens its white glow on hover.
- Sticky mobile CTA appears once the user scrolls past the hero.
- Animated orbs pulse behind the page at 5s intervals.

## Copy rules (repeated from root README)

- Tutoiement everywhere.
- Short sentences, em-dash payoff.
- Inline highlights via the `hl-blue` class or a `<span style={{color:"#4d7cff",fontWeight:600}}>`.
- Never translate `AOV`, `bundle`, `upsell`, `cart drawer`.
- Always surface the promo code, countdown, and risk-reversal inside the CTA box.

## What's deliberately omitted vs production

- Language toggle dropdown — shown as a single flag button. The prod site has an FR/EN switcher.
- No `framer-motion` — uses CSS keyframes to keep the kit dependency-free. Animation timings match the canonical easings.
- No `/api/go` tracking — every CTA is a plain `#` link.
