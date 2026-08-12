# ARTINZ Build Rules

Permanent engineering and design rules for the ARTINZ fragrance house website.

## NO AI-GENERATED UI

Never:

- Generate generic UI or invent layouts without instruction
- Create generic luxury cards or SaaS-style sections
- Use excessive glassmorphism, random gradients, or floating cards
- Use oversized pill buttons or decorative UI without purpose
- Add random particles, glowing elements, or generic "premium" effects
- Use excessive animation because it is technically possible
- Generate AI product imagery, replacement bottles, or fake product photography

When unsure: **STOP. Do not invent. Ask for direction or preserve the existing composition.**

## REAL ASSETS FIRST

Asset priority:

1. Supplied ARTINZ asset
2. Existing ARTINZ website asset (artinz.co)
3. Deliberately created graphic asset
4. AI-generated asset — **only after explicit approval**

Never silently generate an image to fill a missing slot. If an important visual asset is missing, create an intentional asset slot and report:

```
MISSING ASSET: [name]
```

Do not substitute generic stock imagery.

## EVERY VISUAL NEEDS A PURPOSE

Before introducing any image, animation, graphic, decorative element, or interaction, ask: **WHY DOES THIS EXIST?**

| Element | Purpose |
|---------|---------|
| Bottle | Product hero |
| Animal | Fragrance identity |
| Ingredient | Scent story |
| Hour | Time / chapter |
| Background | Atmosphere |
| Animation | Depth / transition / feedback |

If an element has no clear purpose, remove it.

## ONE FRAGRANCE AT A TIME

Development sequence:

1. **DIAR** (Phase 1) — establishes reusable design language
2. **RAYAN** (Phase 2)
3. **SANAM** (Phase 3)
4. **LAMEIS** (Phase 4)

Each fragrance must be individually approved before the next is developed. Do not duplicate the exact layout four times — inherit the system, apply distinct art direction.

## STATIC COMPOSITION BEFORE MOTION

Development order:

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

Never skip from "idea" directly to "animated website." Static composition must be strong before interaction is added.

## IMPECCABLE AS DESIGN REVIEW ENGINE

Impeccable is the permanent UI/UX review and refinement skill. It applies to:

- Visual hierarchy, typography, spacing
- Responsive behavior, accessibility, interaction design
- Motion, layout quality, design consistency
- Component refinement, anti-pattern detection, visual polish

Impeccable operates **inside ARTINZ design context**. It does not invent a generic aesthetic.

## PERFORMANCE

- Use Next/Image where appropriate
- Prefer local assets
- Lazy-load non-critical imagery
- Use CSS transforms for future motion
- Keep dependencies minimal
- Do not install animation libraries unless genuinely required

## ACCESSIBILITY

Do not sacrifice accessibility for visual effects:

- Semantic HTML and proper heading hierarchy
- Accessible navigation and keyboard focus
- Reduced-motion support (`prefers-reduced-motion`)
- Descriptive alt text for meaningful images
- Contrast-aware tokens

## GIT SAFETY

- Inspect git status before modifying
- Do not delete unrelated work
- Do not overwrite user-created files without checking
- Run typecheck, lint, and build after changes
- Fix only issues caused by your changes
