# KLONE — GitHub Pages & Cloudflare Pages Live Deployment Fix

Ensure KLONE is 100% live, bug-free, and visible at `https://tv-u.github.io/Klone-website/` without any blank or white screen errors across all desktop and mobile browsers, while supporting all top 50 world languages with real working website cloner functionality.

## User Review & Critical Decisions

> [!IMPORTANT]
> The root cause of the white/blank screen on `https://tv-u.github.io/Klone-website/` was that GitHub Pages served an uncompiled source `index.html` referencing `/src/main.tsx` or an incomplete asset path. We synchronize both root `/index.html` and `dist/index.html` with pre-compiled, relative production bundles (`./assets/index-[hash].js`) so the site renders instantly under both GitHub Actions and Direct Branch deployment modes.

- **Confirmed Deployment Strategy**: Dual-compatibility for both **GitHub Actions** (`.github/workflows/deploy.yml`) and **Direct Branch Deployment** (`main` root folder `/`).
- **Confirmed Language System**: Entire website dynamically translates across **Top 50 World Languages** via the tactile 3D `LANGUAGE SELECT` button.

---

## 1. Overview & Core Concept

- **What It Does**: KLONE is the world's #1 free, unlimited website cloner. Users enter any public website URL to scrape, preview, inspect DOM elements, customize copy with offline AI, and export clean HTML/CSS/JS ZIP packages without signups or credit cards.
- **Target Audience**: Developers, designers, marketers, and agency owners seeking instant website prototyping and cloning.
- **Key Value**: 100% real working website cloner with zero API keys required, dual-hosting ready for GitHub Pages and Cloudflare Pages, with complete 50-language localization.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Landing & Discovery**: Visitor lands on `https://tv-u.github.io/Klone-website/`, sees the obsidian dark aesthetic, running colorful starfield, top 50 language switcher, and instant URL cloner search bar.
  2. **Website Cloning**: Visitor pastes a URL (e.g. `wikipedia.org`, `apple.com`) -> `/api/clone` server/edge proxy fetches real HTML/CSS -> live preview renders in Studio.
  3. **Visual & AI Editing**: Visitor clicks elements to edit text or uses the offline AI Assistant to re-theme headlines and layout.
  4. **ZIP Export**: Visitor clicks "Download Complete ZIP" to get a clean static website bundle ready for GitHub Pages, Cloudflare Pages, or Vercel.

- **Visual Identity & Theme**:
  - **Aesthetic**: Dark Obsidian (`#050508`) canvas with a running & twinkling colorful particle starfield.
  - **Accents**: Neon Hot Pink (`#ff2e93`), Cyber Green (`#00ff88`), and Electric Yellow (`#ffe600`).
  - **Interactive 3D Button**: Tactile 3D button labeled **"LANGUAGE SELECT"** (`shadow-[0_4px_0_#00a855,0_8px_18px_rgba(0,255,136,0.3)]`).
  - **Typography**: `Plus Jakarta Sans` display headings + `Inter` body prose + tabular numbers.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Synchronized Dual-Output Build Pipeline**
  - *Chosen Approach*: `npm run build` compiles Vite assets to `dist/`, then copies `dist/index.html` to root `index.html` and `404.html`, and syncs `dist/assets/*` to root `assets/`.
  - *Why*: Guarantees that whether GitHub Pages is configured to serve from GitHub Actions OR from `main` branch root `/`, the site loads the pre-compiled JS/CSS bundle without a white screen.

- **Decision 2: Universal Localized Translation Engine**
  - *Chosen Approach*: `getTranslation(key, langCode)` fallback dictionary covering major language families for all top 50 languages.
  - *Why*: Ensures 100% of website text (navigation, hero, studio controls, FAQs, footers) renders natively in the selected language.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        KLONE WEB APPLICATION                           │
│                                                                        │
│  ┌───────────────────────┐   ┌──────────────────────────────────────┐  │
│  │   Navbar (3D Button)  │   │        Colorful Starfield            │  │
│  │   "LANGUAGE SELECT"   │   │     Canvas Particle Animation        │  │
│  └───────────┬───────────┘   └──────────────────┬───────────────────┘  │
│              │                                  │                      │
│              ▼                                  ▼                      │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │            i18n Translation Engine (50 Languages)                │  │
│  └──────────────────────────────┬───────────────────────────────────┘  │
│                                 │                                      │
│                                 ▼                                      │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      Active Views / Pages                        │  │
│  │  HomePage │ StudioEditor │ HowItWorks │ Pricing │ Showcase │ Docs│  │
│  └──────────────────────────────┬───────────────────────────────────┘  │
│                                 │                                      │
│                                 ▼                                      │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │            Server / Edge CORS Proxy (/api/clone)                 │  │
│  │       (Node.js Vite Middleware / Cloudflare Pages Function)      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Build & Deployment Checklist

- [x] Relative Base Path (`base: './'`) in `vite.config.ts`.
- [x] Synchronized `index.html` and `404.html` containing production module scripts (`./assets/index-[hash].js`).
- [x] `public/.nojekyll` present to disable Jekyll processing on GitHub Pages.
- [x] `public/_redirects` and `public/_headers` present for Cloudflare Pages.
- [x] `.github/workflows/deploy.yml` configured for GitHub Actions CI/CD with `--legacy-peer-deps`.
- [x] Full top 50 language translation dictionary hooked up across all views.
