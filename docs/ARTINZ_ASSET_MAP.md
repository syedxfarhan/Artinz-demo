# ARTINZ Asset Map

Inventory of visual assets for the ARTINZ website. **Do not invent missing assets.** Report gaps as `MISSING ASSET: [name]`.

## Asset hierarchy

1. Supplied ARTINZ asset
2. Existing ARTINZ website asset (artinz.co)
3. Deliberately created graphic asset
4. AI-generated asset (explicit approval only)

## Directory structure

```
public/artinz/
  diar/
  rayan/
  sanam/
  lameis/
```

Source files also exist at repository root (uploaded originals). DIAR assets are copied into `public/artinz/diar/` for Next.js serving.

---

## DIAR — 06:40 — Dawn

| Asset type | Path | Status |
|------------|------|--------|
| Bottle (product still life) | `public/artinz/diar/bottle.webp` (from `diar.webp`) | Available — 1086×1448 |
| Animal (Falcon, cutout) | `public/artinz/diar/animal.png` (from `eaglediar.webp`) | Available — 1024×1536 RGBA |
| Animal source | `public/artinz/diar/animal-source.jpg` | Available (studio original) |
| Ingredient — Raspberry | `public/artinz/diar/ingredient-raspberry.webp` (from `diarraspberry.webp`) | Available — 1536×1024 |
| Ingredient — Citrus + Cinnamon | `public/artinz/diar/ingredient-citrus-cinnamon.webp` (from `diarlemon.webp`) | Available — 1536×1024 |

**Notes:** There is no single combined raspberry+lemon+cinnamon file. The bottle still life already includes all three ingredients at the base. Separate raspberry and citrus/cinnamon photographs are used as secondary scroll layers.

**Fragrance association:** Dawn, raspberry / lemon / cinnamon, falcon identity, warm `--dawn` accent (`#C9762E`).

---

## RAYAN — 12:00 — Noon

| Asset type | Path | Status |
|------------|------|--------|
| Bottle | `Rayan.webp` (root) | Available at root — UI not built |
| Animal | — | MISSING ASSET: rayan-animal |
| Atmosphere | — | MISSING ASSET: rayan-atmosphere |
| Ingredients | — | MISSING ASSET: rayan-ingredients |

**Fragrance association:** Noon, apple/lavender/bergamot, `--noon` accent (`#3A4A5E`). UI not built yet.

---

## SANAM — 18:30 — Dusk

| Asset type | Path | Status |
|------------|------|--------|
| Bottle | `Sanam.webp` (root) | Available at root — UI not built |
| Animal | — | MISSING ASSET: sanam-animal |
| Atmosphere | — | MISSING ASSET: sanam-atmosphere |
| Ingredients | — | MISSING ASSET: sanam-ingredients (notes TBD) |

**Fragrance association:** Dusk, `--dusk` accent (`#5B3358`). UI not built yet.

---

## LAMEIS — 21:15 — Night

| Asset type | Path | Status |
|------------|------|--------|
| Bottle | `Lameis.webp` (root) | Available at root — UI not built |
| Animal | — | MISSING ASSET: lameis-animal |
| Atmosphere | — | MISSING ASSET: lameis-atmosphere |
| Ingredients | — | MISSING ASSET: lameis-ingredients (notes TBD) |

**Fragrance association:** Night, `--night-bg` / `--night-accent`. UI not built yet.

---

## Shared / global assets

| Asset type | Path | Status |
|------------|------|--------|
| Logo | — | MISSING ASSET: artinz-logo (wordmark is typographic for now) |
| Favicon | — | MISSING ASSET: artinz-favicon |
| OG image | — | MISSING ASSET: artinz-og-image |

---

## Phase 1 usage

DIAR chapter uses real assets only:

1. Bottle photograph — primary hero
2. Falcon cutout — secondary identity layer
3. Raspberry + citrus/cinnamon photographs — scroll-reveal scent layers
