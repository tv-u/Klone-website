# KLONE — Cloudflare Pages Auto-Sync, Mandatory Pages & Worldwide SEO Suite

Configure KLONE for 100% automated Cloudflare Pages deployment from GitHub, complete all mandatory legal and policy pages, enforce entire-site translation across top 50 world languages, activate Austere Smart Ads monetization, and optimize worldwide search engine indexing.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Recommended Cloudflare Pages Settings (When connecting GitHub repo)**:
> - **Framework Preset**: `Vite`
> - **Build Command**: `npm run build`
> - **Build Output Directory**: `dist`
> The edge scraper function is located at `functions/api/clone.ts` and will automatically execute on Cloudflare's global edge network without CORS limits or server configuration.

- **Confirmed Hosting Architecture**: Dual-deployment ready for **Cloudflare Pages** and **GitHub Pages** with auto-sync on `git push`.
- **Confirmed Legal Suite**: Full content generated for **About Us**, **Security & Compliance**, **Disclaimer & EULA**, **Terms of Service**, **Privacy Policy**, and **Cookie Settings**.
- **Confirmed Language Engine**: 100% entire-site translation for all **Top 50 World Languages** via the tactile 3D `LANGUAGE SELECT` button.

---

## 1. Overview & Core Concept

- **What It Does**: KLONE is the world's #1 free unlimited website cloner. Users enter any public website URL to fetch, preview, edit via visual inspector or offline AI, and export clean HTML/CSS/JS ZIP packages without signups or credit cards.
- **Target Audience**: Developers, designers, marketers, and agency owners seeking instant website prototyping and cloning.
- **Key Value**: Instant edge-powered cloning, 100% real working features, zero dummy stubs, top 50 language support, complete legal compliance, and active ad monetization.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Landing & Discovery**: Visitor lands on `https://tv-u.github.io/Klone-website/` or `https://kloner.pages.dev`, sees obsidian dark theme, running colorful starfield canvas, top 50 language switcher, and instant URL cloner bar.
  2. **Language Selection**: Visitor clicks 3D **"LANGUAGE SELECT"** button -> picks any language (e.g. Hindi, Spanish, Arabic, German, Japanese) -> entire site (navigation, hero, cloner, FAQs, policy pages) updates instantly.
  3. **Mandatory Policy Browsing**: Visitor accesses About Us, Security & Compliance, Disclaimer, Terms, Privacy, or Cookie Settings from the footer -> reads complete, fully-filled policy prose.
  4. **Cloning & Customization**: Visitor pastes a URL -> Edge Function `/api/clone` scrapes DOM & CSS -> live preview renders in Studio with visual DOM inspector and offline AI assistant -> 1-click ZIP export.

- **Visual Identity & Theme**:
  - **Aesthetic**: Obsidian Black (`#050508`) canvas with a running & twinkling colorful particle starfield.
  - **Accents**: Neon Hot Pink (`#ff2e93`), Cyber Green (`#00ff88`), and Electric Yellow (`#ffe600`).
  - **Interactive 3D Button**: Tactile 3D button labeled **"LANGUAGE SELECT"** (`shadow-[0_4px_0_#00a855,0_8px_18px_rgba(0,255,136,0.3)]`).
  - **Typography**: `Plus Jakarta Sans` headings + `Inter` body prose + monospace tabular numbers.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Edge Proxy Function for Cloudflare Pages (`functions/api/clone.ts`)**
  - *Chosen Approach*: Cloudflare Pages Function at `functions/api/clone.ts` handles `/api/clone` POST requests at the edge.
  - *Why*: Allows zero-CORS website scraping directly on Cloudflare's global edge network without needing external proxy APIs or server configuration.

- **Decision 2: Comprehensive Legal & Compliance Suite**
  - *Chosen Approach*: Dedicated routed pages for About Us, Security & Compliance, Disclaimer, Terms, Privacy, EULA, and Cookie Consent Center.
  - *Why*: Fulfills search engine quality guidelines (Google, Bing), satisfies ad network policies (Austere Ads), and establishes user trust worldwide.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                      KLONE WORLDWIDE ARCHITECTURE                      │
│                                                                        │
│  ┌───────────────────────┐   ┌──────────────────────────────────────┐  │
│  │   Navbar (3D Button)  │   │     Running Starfield Background     │  │
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
│  │                     Pages & Content Suite                        │  │
│  │  Home │ Studio │ HowItWorks │ Pricing │ About │ Security │ Legal │  │
│  └──────────────────────────────┬───────────────────────────────────┘  │
│                                 │                                      │
│                                 ▼                                      │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │           Cloudflare Pages Edge Function (/api/clone)            │  │
│  │    (Zero-CORS Real Website Scraper on Global Edge Network)       │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Verification Checklist

- [x] `functions/api/clone.ts` edge scraper compiled and verified.
- [x] `public/_redirects` (`/* /index.html 200`) and `public/_headers` verified.
- [x] All mandatory pages (About Us, Security, Disclaimer, Terms, Privacy, EULA) generated and completely filled.
- [x] Top 50 language translation dictionary verified across all views.
- [x] Austere Smart Ads 3-zone script integration verified.
- [x] Dynamic `/sitemap.xml` and `/robots.txt` verified for search engines.
