# Artinz

Premium independent fragrance house website.

**ONE HOUSE. FOUR HOURS.**

## Stack

- Next.js 15 (App Router)
- TypeScript
- CSS custom properties (`styles/artinz.css`)

## Development

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Deploy on Vercel

This repo is configured for Vercel (Next.js framework preset).

### Option A — GitHub (recommended)

1. Import the repository in the [Vercel dashboard](https://vercel.com/new).
2. Framework: **Next.js** (auto-detected via `vercel.json`).
3. Build command: `npm run build` · Install: `npm ci` · Output: default.
4. Node: `22` (see `.nvmrc` / `engines`).
5. Connect the project so every push to `main` deploys to Production and every PR gets a Preview URL.

No environment variables are required for Phase 1 (static DIAR chapter + local assets under `public/`).

### Option B — CLI

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

### Notes

- Runtime images are served from `public/artinz/`. Root-level source uploads are excluded from the Vercel upload via `.vercelignore` to keep deploys lean.
- Custom domain (e.g. `artinz.co`) can be attached in Vercel → Project → Domains after the first successful deploy.

## Documentation

- [Design System](docs/ARTINZ_DESIGN_SYSTEM.md)
- [Asset Map](docs/ARTINZ_ASSET_MAP.md)
- [Build Rules](docs/ARTINZ_BUILD_RULES.md)
- [DESIGN.md](DESIGN.md) — Impeccable design record

## Status

Phase 1: DIAR opening + first chapter.
