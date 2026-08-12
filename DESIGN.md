---
name: ARTINZ
description: "One house. Four hours. — editorial fragrance house experience"
colors:
  void: "#0B0D10"
  bone: "#F3EDE4"
  brass: "#B8935A"
  dawn: "#C9762E"
  noon: "#3A4A5E"
  dusk: "#5B3358"
  night-bg: "#2A1B22"
  night-accent: "#8C5A4A"
typography:
  scale:
    display-xl: "6.5rem"
    display-xl-min: "2.6rem"
    display-l: "2.6rem"
    display-l-min: "1.7rem"
    display-m: "1.4rem"
    display-m-min: "1.05rem"
    display-s: "1rem"
    ui-body: "0.92rem"
    ui-l: "0.82rem"
    ui-m: "0.75rem"
    ui-s: "0.7rem"
    ui-xs: "0.66rem"
  name:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 8.2vw, 6.5rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "0.07em"
  time:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.01em"
  story:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.05rem, 1.7vw, 1.4rem)"
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.45
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    letterSpacing: "0.2em"
  notes:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.24em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.5
spacing:
  unit: "0.25rem"
  gutter: "clamp(1.15rem, 4vw, 3.25rem)"
  nav-height: "clamp(3.25rem, 6vh, 4.25rem)"
rounded:
  none: "0"
components:
  chapter-cta:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    borderBottom: "1px solid {colors.dawn}"
    padding: "0 0 0.35rem"
  navigation-brand:
    fontFamily: "{typography.name.fontFamily}"
    fontSize: "0.82rem"
    letterSpacing: "0.3em"
    textColor: "{colors.bone}"
  demo-cart:
    backgroundColor: "{colors.void}"
    border: "1px solid {colors.bone}"
    textColor: "{colors.bone}"
    padding: "1.15rem 1.25rem"
---

# Design System — ARTINZ

**ONE HOUSE. FOUR HOURS.** One fragrance house moving through a single day:
DIAR 06:40 dawn, RAYAN 12:00 noon, SANAM 18:30 dusk, LAMEIS 21:15 night.

Photography leads. Type is an editorial frame. UI is quiet and never decorative.
Visitor mode: **Experience** (artifact-led) with a clear Discover action and a
demo purchase path.

## Foundations

### Color

| Token | Hex | Role |
|-------|-----|------|
| void | `#0B0D10` | Page ground |
| bone | `#F3EDE4` | Primary type |
| brass | `#B8935A` | Restrained metal accent |
| dawn | `#C9762E` | DIAR accent |
| noon | `#3A4A5E` | RAYAN accent base |
| dusk | `#5B3358` | SANAM accent base |
| night-bg / night-accent | `#2A1B22` / `#8C5A4A` | LAMEIS ground and accent base |

Hour grounds are void carried a short distance toward the hour
(`--ground-diar` … `--ground-lameis`), never a flooded colour field. Hour accents
(`--accent-*`) are lifted toward bone so hairlines and markers stay legible on
near-black. The active hour publishes `--chapter-accent` from
`:root[data-hour]`, which is the only thing navigation, hour line and cart
recolour.

Amber, blue, plum and burgundy come from the photography, not from UI fills.

### Typography

- **Display:** Fraunces — fragrance name, hour, story, footer line
- **UI:** Inter — navigation, notes, prices, cart, controls
- Latin and Latin-Extended subsets are loaded so German (Ä Ö Ü ä ö ü ß) renders
  in the same faces at the same sizes. Language changes words, never the design.
- One ramp, documented in the frontmatter `typography.scale`; each step is a
  clamp that spans 320px → 1920px, so breakpoints never restate a font size.
- Notes are small tracked caps — never pill chips.

### Spacing

Base unit `0.25rem`; one page gutter `clamp(1.15rem, 4vw, 3.25rem)`. Chapter
compositions are asymmetric and per-hour; the collection index and footer are the
only aligned grids.

### Depth

No cards, no glass, no radius. Depth is photographic: bottle → animal →
ingredients, dissolved into the ground with masks. Motion adds parallax and a
±3.5° pointer tilt on fine pointers only.

## Components

### Navigation (global, fixed)

Wordmark `ARTINZ`, links SHOP / ABOUT / JOURNAL, language switch EN / DE, demo
cart control with a two-digit count. Mobile: wordmark, cart, menu button opening
a type-only sheet with the four hours. Only the accent adapts per hour.

### Hour Line (global, fixed)

Desktop: 1px vertical track, four hour dots, accent fill to `--house-position`,
active hour time set vertically. Mobile: four dots at the bottom edge. Dots are
buttons that move to a chapter.

### Demo cart

Explicitly fake, labelled in copy and in code. Client-side state only; opens
with DIAR × 1. `VIEW CART →` and `CHECKOUT →` are inert placeholders. No
payment, order, inventory or account.

### Chapter (one per hour)

Section of 250vh with a sticky 100vh stage. `--progress` (0→1) is written by one
house scroll listener; every reveal and parallax reads it in CSS. Layers:

1. **Bottle stage** — the real product photograph, complete and readable, edges
   dissolved by mask into the ground. Never cropped into a rectangle card.
2. **Animal layer** — the identity photograph, large, partially cropped,
   recognisable in the first viewport, quieter than the bottle.
3. **Ingredient layers** — revealed by chapter depth, masked, never boxed.
4. **Type** — hour + name + notes + Discover CTA; story and price arrive with
   depth.

### Collection index

Typographic list of the four hours with real AED prices and a demo add control.
Not a product grid.

## Art direction per hour (locked once approved)

| Hour | Ground | Accent | Composition |
|------|--------|--------|-------------|
| DIAR 06:40 | void | dawn | Type left, falcon standing between type and product, still life right. Warm. |
| RAYAN 12:00 | void → noon | lifted noon | Mirrored: still life left of centre, white falcon large at the right, high and crisp. |
| SANAM 18:30 | void → dusk | lifted dusk | Peacock as the right-hand atmosphere, bottle left, type low. Soft, fading light. |
| LAMEIS 21:15 | void → night | brass / night | One photograph: leopard and product in the same pool of light. Type split around it. |

Each hour is locked when approved; later hours reuse the system and never edit an
approved chapter's CSS (`styles/chapters/<hour>.css`).

## Layout principles

1. Product photography is the argument of every first viewport.
2. Asymmetric editorial composition; no centred SaaS hero, no card grids.
3. Mobile is composed, not stacked: hour → name → bottle → animal → notes → CTA.
4. Chapter transitions blend grounds at the top of each stage; the photography
   does the work, not gradients.
5. Every visual has a purpose: product, identity, scent, hour, atmosphere,
   feedback.

## Do / Don't

**Do**

- Use the real ARTINZ photography in `public/artinz/<hour>/`
- Keep motion restrained: entrance, depth, reveal, chapter change
- Respect `prefers-reduced-motion` (`--motion-scale: 0`)
- Keep secondary text ≥ ~55% bone on near-black grounds

**Don't**

- Generate product or animal imagery, or fetch stock
- Add cards, glass, particles, cursor trails, gradients-as-decoration, pills
- Restyle an approved chapter while building the next one
- Introduce real commerce: payment, checkout, accounts, inventory

## Content & assets

Real photography only. Bottles, animals and ingredients are supplied ARTINZ
assets; `public/artinz/lameis/stage.webp` is the house's own leopard photograph
from artinz.co (asset tier 2). Prices are the current AED prices: DIAR 85,
RAYAN 75, SANAM 75, LAMEIS 85. Stories and notes are fixed copy — see
`data/fragrances.ts`; UI strings live in `data/copy.ts` (EN/DE).
