---
name: ARTINZ
description: "One house. Four hours. — editorial fragrance campaign experience"
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
  display:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.25rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "0.08em"
  time:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.5rem, 11vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 0.85
    letterSpacing: "-0.02em"
  story:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)"
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.45
  ui:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.18em"
  notes:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.28em"
spacing:
  unit: "0.25rem"
  section-pad-x: "clamp(1.25rem, 4vw, 3rem)"
  composition-gap: "clamp(1rem, 3vw, 3rem)"
rounded:
  none: "0"
components:
  collection-cta:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    borderBottom: "1px solid {colors.brass}"
    padding: "0 0 0.35rem"
  navigation-brand:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.8rem"
    letterSpacing: "0.28em"
    textColor: "{colors.bone}"
---

# Design System — ARTINZ

Built from the Phase 1 DIAR opening. Photography leads; UI is a quiet editorial frame.

## Product Context

ARTINZ is a premium independent fragrance house. The site is an editorial campaign experience organized as **ONE HOUSE. FOUR HOURS.** Phase 1 ships only DIAR (06:40 — Dawn). Later chapters inherit this system with their own art direction — they must not duplicate DIAR’s layout.

Visitor mode for the homepage: **Experience** (artifact-led) with a clear Discover action.

## Foundations

### Color

| Token | Hex | Role |
|-------|-----|------|
| void | `#0B0D10` | Page ground |
| bone | `#F3EDE4` | Primary type |
| brass | `#B8935A` | Focus rings, restrained accents, CTA underline |
| dawn | `#C9762E` | DIAR warmth — drawn into atmosphere overlays from photography, never flooded as UI fill |

Amber and warmth come primarily from the bottle photograph. Brass stays extremely restrained.

### Typography

- **Display / editorial:** Fraunces — DIAR title, 06:40 timestamp, story line
- **UI:** Inter — nav, notes, CTA
- Notes are small, uppercase, tracked; never pill chips
- Time is large and low-opacity — editorial timestamp, not a clock widget

### Spacing

Base unit `0.25rem`. Composition uses asymmetric desktop grid (copy | bottle) with generous outer padding. More space above headings than below. Avoid card grids and equal-metric strips.

### Elevation / depth

No card chrome. Depth comes from photographic layering (bottle → falcon → ingredients), soft drop-shadow on the bottle image, and subtle parallax — not boxed shadows or glass panels.

## Components

### Navigation

Quiet wordmark `ARTINZ` + text links (SHOP / ABOUT / JOURNAL). Subordinate to product photography.

### Hour Line

Vertical track + brass marker + vertical time. DIAR-only for Phase 1. Never the primary visual.

### Bottle Stage

Dominant product photograph (~45–60vh / large share of viewport). Desktop pointer tilt capped ~±3.5°. No tilt on coarse pointers. Do not crop the bottle awkwardly or recolor the asset.

### Animal Layer

Falcon identity layer — large, cropped, quieter than the bottle. Desktop: luminosity blend. Mobile: normal blend at readable opacity on the right edge.

### Fragrance notes + story

Typography only. Exact DIAR story: *Raspberry first, then cinnamon settles as the sun clears the dunes.*

### Collection CTA

Text link `DISCOVER DIAR →` with brass underline. No pills, gradients, or filled buttons.

## Layout Principles

1. Product photography is the hero argument of the first viewport.
2. Asymmetric editorial campaign composition — refuse centered SaaS heroes and card grids.
3. Hero is the beginning of the DIAR chapter (sticky scroll depth), not a separate marketing block.
4. Scroll reveals story + ingredient layers; normal browser scrolling remains natural.
5. Every visual needs a purpose (bottle / animal / ingredient / hour / atmosphere / feedback).

## Do / Don’t

**Do**

- Use real ARTINZ assets from `public/artinz/diar/`
- Keep motion restrained (opacity + translate entrances; subtle tilt/parallax)
- Respect `prefers-reduced-motion`
- Keep contrast readable (void/bone; footer secondary text ≥ ~62% bone)

**Don’t**

- Invent AI product imagery or generic luxury UI
- Add cards, carousels, testimonials, glassmorphism, particles, or oversized pill buttons
- Build RAYAN / SANAM / LAMEIS chapters until DIAR is approved
- Flood the UI with dawn/orange fills

## Content & Assets

DIAR assets in use:

- `public/artinz/diar/bottle.webp` — product hero still life
- `public/artinz/diar/animal.png` — falcon cutout
- `public/artinz/diar/ingredient-raspberry.webp`
- `public/artinz/diar/ingredient-citrus-cinnamon.webp`

Root originals: `diar.webp`, `eaglediar.webp`, `diarraspberry.webp`, `diarlemon.webp`.
