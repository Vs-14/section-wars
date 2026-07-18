# Section Wars — MAXI, XLRI Jamshedpur

A frontend-only React proof-of-concept for **Section Wars**, MAXI's inter-section festival
at XLRI Jamshedpur. Static content only — no backend, auth, scoring, or admin panel.

## Stack

- React + Vite (JavaScript/JSX)
- React Router (client-side routing)
- Plain CSS (no CSS framework)
- All content lives in `src/data/*.js`

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (output in dist/, base path /section-wars/)
npm run preview  # preview the production build
```

## Placeholder content

This PoC was built without access to MAXI's real brand assets or verified historical
records. To keep things honest instead of inventing facts:

- **Logos** (`public/images/branding/`) are generic wordmark placeholders — swap for the
  real MAXI/XLRI logo files.
- **Brand colours** (`src/styles/variables.css`) are a placeholder maroon/gold palette, not
  MAXI's official brand guide.
- **Hero art and section emblems** are simple generated SVGs illustrating a demo theme
  concept, *"Rasoi Rajneeti"* (campus-eatery campaign posters) — not an officially
  announced theme.
- **Events** (`src/data/events.js`) are traditional Section Wars formats (tug of war,
  dodgeball, etc.) shown as examples, each flagged `confirmed: false` — not a confirmed
  current-edition schedule.
- **Gallery photos** are placeholder tiles pending real event photography.
- **Archive** (`src/data/archive.js`) has no verified historical editions to show, so it
  honestly says so rather than inventing past years/themes.

Search each `src/data/*.js` file for these placeholders and replace them as MAXI supplies
real material.

## Project structure

See `src/components`, `src/pages`, and `src/data` — components are content-agnostic and
receive Section Wars data through props; pages assemble components and wire up the data.