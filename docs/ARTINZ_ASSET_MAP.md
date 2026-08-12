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

Every asset in use is served from `public/artinz/<hour>/`. The uploaded DIAR
originals also remain at the repository root (`diar.webp`, `eaglediar.webp`,
`diarraspberry.webp`, `diarlemon.webp`) and are excluded from deployment by
`.vercelignore`; the RAYAN, SANAM and LAMEIS originals were moved into `public/`
rather than duplicated.

---

## DIAR — 06:40 — Dawn

| Asset type | Path | Source | Status |
|------------|------|--------|--------|
| Bottle (product still life) | `public/artinz/diar/bottle.webp` | `diar.webp` | Available — 1086×1448 |
| Animal (falcon, cutout) | `public/artinz/diar/animal.png` | `eaglediar.webp` | Available — 1024×1536 RGBA |
| Animal source | `public/artinz/diar/animal-source.jpg` | studio original | Available |
| Ingredient — raspberry | `public/artinz/diar/ingredient-raspberry.webp` | `diarraspberry.webp` | Available — 1536×1024 |
| Ingredient — citrus + cinnamon | `public/artinz/diar/ingredient-citrus-cinnamon.webp` | `diarlemon.webp` | Available — 1536×1024 |

The bottle still life already contains raspberry, lemon and cinnamon at its base;
the separate ingredient photographs are scroll-depth scent layers. On mobile only
the citrus/cinnamon layer is used — one scent layer is enough at that width.

---

## RAYAN — 12:00 — Noon

| Asset type | Path | Source | Status |
|------------|------|--------|--------|
| Bottle | `public/artinz/rayan/bottle.webp` | `Rayan.webp` | Available — 1086×1448 |
| Animal (white falcon) | `public/artinz/rayan/animal.webp` | `rayan_eagle.webp` | Available — 1024×1536 |
| Ingredient — apple | `public/artinz/rayan/ingredient-apple.webp` | `Rayan_apple.webp` | Available — 1536×1024 |
| Ingredient — lavender | `public/artinz/rayan/ingredient-lavender.webp` | `rayan_lavender.webp` | Available — 1536×1024 |
| Ingredient — bergamot | `public/artinz/rayan/ingredient-bergamot.webp` | `rayan_citrus.webp` | Available — 1536×1024 |

The white falcon is photographed on a near-black studio ground, so it is
screen-blended into the hour instead of being cut out.

---

## SANAM — 18:30 — Dusk

| Asset type | Path | Source | Status |
|------------|------|--------|--------|
| Bottle | `public/artinz/sanam/bottle.webp` | `Sanam.webp` | Available — 1086×1448 |
| Animal (white peacock, with black currant and chocolate) | `public/artinz/sanam/animal.webp` | `Sanam_peackockwithblackcurrentandchocolate.webp` | Available — 1402×1122 |
| Ingredient — pear + blossom | `public/artinz/sanam/ingredient-pear-blossom.webp` | `sanam_pearandwhiteflower.webp` | Available — 1402×1122 |

---

## LAMEIS — 21:15 — Night

| Asset type | Path | Source | Status |
|------------|------|--------|--------|
| Stage (bottle **and** leopard in one frame) | `public/artinz/lameis/stage.webp` | `Artinz_Lameis_Leopard.jpg` from artinz.co — asset tier 2 | Available — 1086×1448 |
| Bottle (product only) | `public/artinz/lameis/bottle.webp` | `Lameis.webp` | Available — 1086×1448, held in reserve |
| Ingredients — rose, saffron, oud, coffee | `public/artinz/lameis/ingredients.webp` | `Lameis_all ingredients.webp` | Available — 1402×1122 |

No separate LAMEIS animal cutout was supplied. The house's own product
photograph on artinz.co holds the leopard and the bottle in one pool of light, so
the night chapter is built from that single frame rather than from a layered
identity — which is why `bottle.webp` is unused in the chapter.

---

## Shared / global assets

| Asset type | Path | Status |
|------------|------|--------|
| Logo | — | MISSING ASSET: artinz-logo (the wordmark is typographic — Fraunces, tracked) |
| Favicon | — | MISSING ASSET: artinz-favicon |
| OG image | — | MISSING ASSET: artinz-og-image |

---

## Usage per hour

| Hour | Bottle | Animal | Ingredients |
|------|--------|--------|-------------|
| DIAR | hero, right | falcon cutout between type and product | raspberry + citrus/cinnamon (citrus only on mobile) |
| RAYAN | hero, left | white falcon, screen-blended at the right edge | apple + lavender + bergamot as one horizontal (apple only on mobile) |
| SANAM | hero, low right | peacock spread wide and low; its own band on mobile | pear + blossom |
| LAMEIS | hero, centred — contains the leopard | in the photograph | rose / saffron / pepper at the edge of the light |
