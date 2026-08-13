# Minecraft Builds Showcase

A gallery of 142 real Minecraft builds across 5 categories — Houses, Castles, Towers, Farms, and Special — sourced from Rock Paper Shotgun, TechShout, and Moms Got The Stuff.

**Live site:** [jacoblbagent.github.io/minecraft-builds-showcase](https://jacoblbagent.github.io/minecraft-builds-showcase/)

## Features

- **Search** — filter builds by name or creator
- **Category filter** — chip-based filter for Houses, Castles, Towers, Farms, or Special
- **Detail modal** — click any build to see its full image, name, and creator credit
- **Mobile-friendly** — filter bar collapses to a modal-triggered icon on small screens
- **Dark theme** — simple dark UI with 2px border radius and Minecraft green accent (#6fbf4e)

## Stack

- React 19 + TypeScript 6
- Vite 8
- SCSS modules
- gh-pages for deployment

## Data

All 142 builds are stored in `src/data/builds.ts` with real 1920×1080 JPEG screenshots in `public/images/`. Sources:

| Category | Source | Entries |
|----------|--------|---------|
| Houses | Rock Paper Shotgun | 33 |
| Castles | Rock Paper Shotgun, TechShout | 29 |
| Towers | Rock Paper Shotgun, TechShout, Moms Got The Stuff | 26 |
| Farms | TechShout, Moms Got The Stuff | 26 |
| Special | Rock Paper Shotgun, TechShout | 28 |

## Getting Started

```bash
npm install
npm run dev        # dev server at localhost:5173
npm run build      # production build
npm run preview    # preview production build
```

## Deployment

Deployed via GitHub Pages:

```bash
npm run build
npm run deploy
```

Or shorthand:

```bash
git push origin main && npm run deploy
```

## Build Details

- 142 builds × 1920×1080 JPEG screenshots
- ~219 KB JS bundle (gzipped ~65 KB)
- ~6 KB CSS (gzipped ~2 KB)
- Zero runtime dependencies beyond React