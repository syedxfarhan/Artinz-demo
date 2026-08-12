# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 (App Router), TypeScript, CSS custom properties. No animation libraries installed. Fonts via next/font (Fraunces display, Inter UI).

## Users

Visitors to artinz.co seeking a premium, editorial fragrance experience. They are exploring the ARTINZ house and its four time-based fragrances — not shopping a conventional ecommerce template.

## Product Purpose

ARTINZ is a premium independent fragrance house. The website presents an editorial fragrance experience built around the concept **ONE HOUSE. FOUR HOURS.** — four fragrances experienced as four moments of one day. Success means each fragrance chapter feels cinematic, intentional, and art-directed while the house identity remains coherent.

## Positioning

Four fragrances mapped to specific hours of a single day (DIAR 06:40 Dawn, RAYAN 12:00 Noon, SANAM 18:30 Dusk, LAMEIS 21:15 Night). The site is image-led and atmospheric, not a generic luxury ecommerce layout.

## Operating Context

- Website: artinz.co
- Development is sequential: one fragrance chapter at a time, starting with DIAR
- Static composition must be approved before interaction or motion
- Real supplied assets are the source of truth; AI-generated imagery requires explicit approval
- Impeccable is the permanent UI/UX review engine, operating within ARTINZ art direction — not inventing a generic aesthetic

## Capabilities and Constraints

- Homepage is an editorial scroll experience (future: scroll progress, hour line, chapter transitions)
- Bottle interaction (future): pointer position → subtle rotation → depth → specular light
- Responsive breakpoints prepared: 1440px+, 1024px tablet, 768px and below mobile, 390px/375px/320px small mobile
- Accessibility foundation: semantic HTML, heading hierarchy, keyboard focus, reduced-motion support, contrast-aware tokens
- Performance: Next/Image where appropriate, local assets, lazy loading, CSS transforms for motion, minimal dependencies

## Brand Commitments

- Tone: cinematic, editorial, restrained, atmospheric, sophisticated, tactile, premium, image-led, intentional
- Hard rule: **NO AI-GENERATED UI** — no generic luxury cards, SaaS sections, glassmorphism, random gradients, floating cards, oversized pill buttons, decorative UI without purpose, or AI product imagery without approval
- Every visual must have a clear purpose (product hero, fragrance identity, scent story, time/chapter, atmosphere, depth/transition/feedback)
- When unsure: stop, do not invent, ask for direction

## Evidence on Hand

- Design tokens defined in `styles/artinz.css`
- Fragrance data in `data/fragrances.ts` (DIAR and RAYAN have story/notes; SANAM and LAMEIS are data-only)
- Asset directories scaffolded under `public/artinz/` — **no assets committed yet**
- Project documentation: `docs/ARTINZ_DESIGN_SYSTEM.md`, `docs/ARTINZ_ASSET_MAP.md`, `docs/ARTINZ_BUILD_RULES.md`
- Existing ARTINZ website (artinz.co) may supply assets — not yet audited in this repository

## Product Principles

1. **Real assets first** — supplied ARTINZ asset → existing website asset → deliberately created graphic → AI only after explicit approval
2. **One fragrance at a time** — DIAR establishes the design language; each subsequent chapter inherits the system with its own art direction
3. **Static composition before motion** — strong static layout before scroll interactions, animations, or bottle depth effects
4. **Every visual needs a purpose** — if an element has no clear role, remove it
5. **Deliberate art direction** — Impeccable refines within ARTINZ context; it does not invent a generic luxury aesthetic

## Accessibility & Inclusion

- Semantic HTML and proper heading hierarchy required
- Accessible navigation and keyboard focus states established in token layer
- `prefers-reduced-motion` respected globally
- Image alt-text strategy: descriptive for product/identity imagery; decorative layers marked `aria-hidden`
- Contrast-aware tokens (void/bone base pair)
