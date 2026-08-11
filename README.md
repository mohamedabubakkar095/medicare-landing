# Medicare — Healthcare Landing Page

A pixel-focused, fully responsive recreation of the provided design reference, built with React (functional components + hooks), CSS Modules, and Framer Motion.

## Tech Stack

- **React 18** (functional components, hooks)
- **Vite** for tooling/dev server
- **CSS Modules** for scoped styling
- **Framer Motion** for scroll-reveal and micro-interactions
- **react-icons** for iconography

## Features

- Fully responsive layout (mobile, tablet, desktop breakpoints)
- Dark / light mode toggle (persisted to `localStorage`, respects OS preference on first visit)
- Smooth scrolling + scroll-triggered section animations
- Hover micro-interactions on buttons and cards
- Semantic HTML, accessible labels, and visible keyboard focus states
- `prefers-reduced-motion` respected — animations disable for users who request it
- Componentized, reusable structure — one folder per section, each with its own CSS module

## Folder Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Features/
│   ├── Dashboard/
│   ├── TrustedBy/
│   ├── Consultants/
│   ├── ConsultMap/
│   ├── CTABanner/
│   └── Footer/
├── context/
│   └── ThemeContext.jsx      # dark/light theme provider
├── styles/
│   └── global.css            # design tokens (CSS variables) + resets
├── App.jsx
└── main.jsx
```

Each component folder contains a `.jsx` file and a co-located `.module.css` file, so styles never leak across sections.

## Getting Started

```bash
# install dependencies
npm install

# start local dev server
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Deployment

### Vercel
1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

### Netlify
1. Push this repo to GitHub.
2. New site from Git at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

## Implementation Notes

- **Theming**: CSS custom properties (`--color-*`, `--font-*`, `--radius-*`) are defined in `styles/global.css` under `:root` and overridden under `[data-theme='dark']`. The `ThemeContext` toggles a `data-theme` attribute on `<html>`, so no component needs to know which theme is active — it's all handled at the CSS variable level.
- **Animation**: Framer Motion's `whileInView` is used for scroll reveals (each section animates once, `viewport={{ once: true }}`) rather than on every scroll pass, to keep things calm rather than distracting.
- **Images**: Placeholder photography is sourced from Unsplash for the hero and consultant avatars. Swap the `src` values in `Hero.jsx` and `Consultants.jsx` for final brand photography before shipping.
- **No unnecessary dependencies**: only `framer-motion` and `react-icons` were added on top of React itself, per the "avoid unnecessary libraries" requirement.

## Lighthouse / Performance

- Single production JS bundle, code-split by Vite automatically where applicable.
- Fonts are loaded via `preconnect` + a single Google Fonts request.
- Images use `object-fit: cover` inside fixed aspect-ratio containers to avoid layout shift.
