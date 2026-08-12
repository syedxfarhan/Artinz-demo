# ARTINZ Design System

Foundation documentation for the ARTINZ fragrance house website. This document records tokens and principles only — no UI has been designed yet.

## Colors

### Core palette

| Token | Value | Role |
|-------|-------|------|
| `--void` | `#0B0D10` | Primary background, depth |
| `--bone` | `#F3EDE4` | Primary text, light surfaces |
| `--brass` | `#B8935A` | Accent, focus rings, refined highlights |

### Chapter accents

| Token | Value | Fragrance | Moment |
|-------|-------|-----------|--------|
| `--dawn` | `#C9762E` | DIAR | 06:40 — Dawn |
| `--noon` | `#3A4A5E` | RAYAN | 12:00 — Noon |
| `--dusk` | `#5B3358` | SANAM | 18:30 — Dusk |
| `--night-bg` | `#2A1B22` | LAMEIS | 21:15 — Night (background) |
| `--night-accent` | `#8C5A4A` | LAMEIS | 21:15 — Night (accent) |

Source of truth: `styles/artinz.css`

## Typography

| Role | Family | Usage |
|------|--------|-------|
| Display | Fraunces | Headlines, editorial moments, chapter titles |
| UI | Inter | Navigation, labels, body copy, interface text |

Loaded via `next/font/google` in `app/layout.tsx`. CSS variables: `--font-display`, `--font-ui`.

## Spacing philosophy

- Base unit: `0.25rem` (`--space-unit`)
- Scale: 1, 2, 3, 4, 6, 8, 12, 16 multipliers
- Spacing values are defined but not applied — composition is deferred to Phase 1 (DIAR)
- Rhythm should feel editorial and intentional, not grid-template-generic

## Image hierarchy

1. **Supplied ARTINZ asset** — highest priority
2. **Existing artinz.co asset** — second priority
3. **Deliberately created graphic asset** — third priority
4. **AI-generated asset** — only after explicit approval

### Visual purpose taxonomy

| Element type | Purpose |
|--------------|---------|
| Bottle | Product hero |
| Animal | Fragrance identity |
| Ingredient | Scent story |
| Hour / time mark | Time / chapter |
| Background | Atmosphere |
| Animation | Depth / transition / feedback |

If an element has no clear purpose, it does not belong.

## Interaction philosophy

Interaction is **not implemented** in this scaffold. The planned cascade:

```
Scroll progress
  → Current chapter
    → Hour line
      → Background atmosphere
        → Image movement
          → Text reveals
            → Navigation state
```

Bottle interaction (future):

```
Pointer position
  → Subtle rotation
    → Depth
      → Specular light
```

Rules:
- Static composition must be approved before any interaction
- No animation libraries unless genuinely required
- CSS transforms preferred for motion
- `prefers-reduced-motion` always respected

## Responsive principles

Breakpoints (reference values in CSS):

| Name | Width |
|------|-------|
| Small mobile | 320px |
| Mobile | 390px |
| Mobile large | 768px |
| Tablet | 1024px |
| Desktop | 1440px+ |

Responsive design is **not built yet**. Architecture supports media queries and fluid layouts. Mobile refinement comes after desktop static composition and interaction.

## Accessibility

- Semantic HTML with proper heading hierarchy
- `aria-label` on navigation regions
- `aria-hidden` on decorative layers (animal, hour line)
- `:focus-visible` outline using `--brass`
- Global reduced-motion override in `styles/artinz.css`
- Contrast: void/bone base pair designed for readability

## Development sequence

```
Asset audit
  → Art direction
    → Static composition
      → Impeccable review
        → Implementation
          → Interaction
            → Mobile refinement
              → Final polish
```

Fragrance development order: DIAR → RAYAN → SANAM → LAMEIS (one at a time, each approved before the next).
