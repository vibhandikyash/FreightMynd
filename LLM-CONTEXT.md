# FreightMynd — LLM Context File

> This file provides full context for any LLM to continue working on this website. Read this before making changes.

---

## Project Overview

**FreightMynd** is a specialist AI systems website for freight forwarding and logistics automation. Built by [Bitontree](https://bitontree.com). Static marketing site, SEO-first, no CMS. Content is hardcoded in TypeScript data files and Astro components.

**Positioning:** AI-driven cargo data intelligence platform for freight forwarders. Custom-built systems that replace manual freight operations across sea, air & logistics. Flagship client: Hellmann Worldwide Logistics.

**Live URL:** https://freightmynd.com
**Repo:** git@github.com:bitontree/cargoIQ.git

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5.x (SSG, static output) |
| Styling | Tailwind CSS v4 (CSS-based config via `@theme`, `@utility`) |
| Fonts | @fontsource (DM Sans Variable, DM Mono) — self-hosted, no CDN |
| Blog | MDX via @astrojs/mdx, Astro content collections with Zod schema |
| Images | astro:assets with Sharp (WebP, lazy loading) |
| Sitemap | @astrojs/sitemap with custom priorities |
| Deploy | Static output → Cloudflare Pages |

**Not used:** React, Vue, Svelte, CSS-in-JS, Bootstrap, any CMS, Google Fonts CDN, jQuery.

---

## File Structure

```
cargoiq/
├── public/
│   ├── favicon.svg, favicon.ico
│   ├── robots.txt
│   └── fonts/                    # Self-hosted woff2 files
│
├── src/
│   ├── styles/global.css         # Tailwind directives, @font-face, animations, utilities
│   │
│   ├── data/                     # All content lives here as TypeScript
│   │   ├── site.ts               # Site config (name, URL, social, builtBy)
│   │   ├── nav.ts                # Navigation links
│   │   ├── solutions.ts          # 8 solutions with full SEO metadata
│   │   ├── integrations.ts       # 6 TMS integrations with architecture details
│   │   ├── case-studies.ts       # 5 case studies (Hellmann featured)
│   │   ├── testimonials.ts       # 3 testimonial quotes
│   │   ├── stats.ts              # Hero stats (60%, 50%, 300pg, 5 clients)
│   │   └── blog-posts.ts         # Blog metadata
│   │
│   ├── content/
│   │   └── blog/*.mdx            # Blog posts (content collections)
│   │
│   ├── layouts/
│   │   ├── Base.astro            # HTML shell (Seo component, fonts, scroll reveal)
│   │   ├── Page.astro            # Nav + Main + Footer wrapper
│   │   ├── SolutionPage.astro    # Solution detail template
│   │   ├── IntegrationPage.astro # Integration detail template
│   │   ├── CaseStudyPage.astro   # Case study detail template
│   │   └── BlogPost.astro        # Blog post wrapper
│   │
│   ├── components/
│   │   ├── global/               # Nav, Footer, Seo
│   │   ├── ui/                   # Button, Tag, Eyebrow, SectionHeader, StatCard, Card
│   │   ├── sections/             # Hero, StatsBar, SectorCards, ProblemSection, ProofSection,
│   │   │                         # DiffSection, SuiteSection, Testimonials, HowWeEngage,
│   │   │                         # HomeFaq, CtaSection
│   │   └── blog/                 # BlogCard, BlogGrid
│   │
│   └── pages/                    # All routes (see Routes section below)
│
├── src/content.config.ts         # Content collection schema (Zod)
├── astro.config.mjs              # Astro config
├── CLAUDE.md                     # Original build instructions (comprehensive)
└── LLM-CONTEXT.md               # This file
```

---

## All Routes (31 pages)

### Core
| Route | File | Notes |
|-------|------|-------|
| `/` | `index.astro` | Homepage — 11 section components |
| `/about` | `about.astro` | Company info |
| `/contact` | `contact.astro` | Contact form |
| `/freight-forwarders` | `freight-forwarders.astro` | Industry landing page |
| `/thank-you` | `thank-you.astro` | Post-form (noindex) |

### Solutions (8)
| Route | Slug |
|-------|------|
| `/solutions` | Hub page |
| `/solutions/4pl-control-tower-automation` | 4PL Control Tower |
| `/solutions/autonomous-quote-management` | Quote Management |
| `/solutions/document-intelligence` | Document Intelligence |
| `/solutions/freight-pricing-ai` | Freight Pricing AI |
| `/solutions/sea-freight-automation` | Sea Freight |
| `/solutions/air-freight-automation` | Air Freight |
| `/solutions/3pl-4pl-operations` | 3PL/4PL Ops |
| `/solutions/smart-invoice-processing` | Invoice Processing |

### Integrations (6)
| Route | Slug |
|-------|------|
| `/integrations` | Hub page |
| `/integrations/cargowise` | CargoWise |
| `/integrations/sap-tm` | SAP TM |
| `/integrations/oracle-tms` | Oracle TMS |
| `/integrations/microsoft-dynamics` | Microsoft Dynamics |
| `/integrations/descartes` | Descartes |

### Case Studies (5)
| Route | Slug |
|-------|------|
| `/case-studies` | Hub page |
| `/case-studies/hellmann-4pl-control-tower` | Hellmann (featured) |
| `/case-studies/rfq-email-intelligence` | RFQ Email Intelligence |
| `/case-studies/historical-email-intelligence` | Historical Email |
| `/case-studies/rfq-email-automation` | RFQ Email Automation |
| `/case-studies/shipping-news-intelligence` | Shipping News |

### Compare (2)
| Route | File |
|-------|------|
| `/compare/zauber-vs-cargoiq` | Zauber comparison |
| `/compare/freightos-vs-cargoiq` | Freightos comparison |

### Blog (dynamic)
| Route | File |
|-------|------|
| `/blog` | Blog listing |
| `/blog/[slug]` | Dynamic MDX posts |

---

## Data Architecture

All page content is driven by TypeScript data files in `src/data/`. Pages are thin wrappers that import data and pass it to layouts.

### Solution Page Pattern
```astro
---
// src/pages/solutions/4pl-control-tower-automation.astro
import SolutionPage from '../../layouts/SolutionPage.astro';
import { solutions } from '../../data/solutions';
const solution = solutions.find(s => s.slug === '4pl-control-tower-automation')!;
---
<SolutionPage solution={solution} />
```

### Key Data Interfaces

**Solution** (`src/data/solutions.ts`):
- `slug`, `title`, `shortTitle`, `description`
- `metaTitle`, `metaDescription`, `keyword`, `secondaryKeywords[]`
- `icon`, `color`, `headline`, `keywordSubheadline?`, `sub`
- `idealFor[]`
- `problem: { headline, description, painPoints[] }`
- `capabilities: Array<{ title, description }>`
- `useCases: Array<{ scenario, description }>`
- `results: Array<{ value, label, context? }>`
- `stack[]`, `integrations[]`
- `implementation: { timeline, phases[] }`
- `faq: Array<{ q, a }>`

**Integration** (`src/data/integrations.ts`):
- `slug`, `title`, `shortTitle`, `description`, `keyword`
- `metaTitle`, `metaDescription`, `logo`, `intro`
- `architecture: { connectionMethod, supportedVersions, dataObjects[] }`
- `capabilities: Array<{ title, description }>`
- `proofBlock?`, `faq: Array<{ q, a }>`

**CaseStudy** (`src/data/case-studies.ts`):
- `slug`, `title`, `client`, `description`, `keyword`, `headline`
- `heroMetric: { value, label }`, `results: Array<{ value, label, context? }>`
- `stack[]`, `challenge`, `whatWeBuilt[]`
- `color`, `icon`, `featured`
- Optional: `metaTitle`, `metaDescription`, `clientOverview`, `architecture[]`, `keyLearnings[]`

---

## SEO Architecture

### Every page includes:
- Unique `<title>` with primary keyword
- `<meta name="description">` (140-155 chars)
- Canonical URL
- Open Graph + Twitter Card meta
- JSON-LD structured data via `Seo.astro`

### Schema markup by page type:
| Page Type | Schema Types |
|-----------|-------------|
| Homepage | Organization + FAQPage |
| Solution pages | BreadcrumbList + SoftwareApplication + FAQPage |
| Integration pages | BreadcrumbList + FAQPage |
| Case study pages | BreadcrumbList + Article |
| Blog posts | BreadcrumbList + Article |
| Other pages | BreadcrumbList |

### Sitemap priorities:
- Homepage: 1.0 (weekly)
- Solutions/Integrations: 0.9 (monthly)
- Case studies: 0.8 (monthly)
- Other pages: 0.7 (weekly)
- `/thank-you`: excluded

---

## Styling Conventions

### Tailwind CSS v4
Config is CSS-based in `global.css` using `@theme` blocks (not `tailwind.config.mjs`).

### Color Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| `brand` | #1A5FA8 | Primary blue |
| `brand-dark` | #154d8a | Hover states |
| `brand-light` | #EEF4FC | Light backgrounds |
| `brand-mid` | #C7DEFA | Borders, accents |
| `ink` | #0D1117 | Primary text |
| `ink-2` | #1A2332 | Dark backgrounds |
| `ink-3` | #4A5568 | Secondary text |
| `ink-4` | #8A96A3 | Muted text |
| `surface` | #F8F9FB | Page background |
| `line` | #E2E8F0 | Borders |
| `mint` | #0EA47A | Success/health accent |

### Component Classes (defined in global.css)
- `.container` — max-w-content mx-auto px-10 (px-5 on mobile)
- `.section` — py-24 (py-16 on mobile)
- `.eyebrow` — mono text uppercase tracking-wide
- `.tag` / `.tag-brand` — small pill labels
- `.btn` / `.btn-brand` / `.btn-ghost` / `.btn-white` / `.btn-sm` — button variants
- `.section-heading` — left border accent, display-md font
- `.card` — white bg, border, shadow, hover lift

### Scroll Reveal
Elements with `data-reveal` attribute animate in on scroll via IntersectionObserver (in Base.astro). Use `data-reveal-delay="1"` through `"5"` for staggered animations.

---

## Blog System

Blog uses Astro content collections with MDX:

### Adding a new blog post:
1. Create `src/content/blog/your-slug.mdx`
2. Add frontmatter:
```yaml
---
title: "Post Title"
description: "Meta description"
publishDate: 2026-03-15
author: "CargoIQ Team"
category: "Guides"
tags: ["AI", "freight"]
featured: false
readingTime: "8 min read"
---
```
3. Write MDX content (supports Astro components)
4. Add entry to `src/data/blog-posts.ts` for listing page

### Content collection config:
- Schema: `src/content.config.ts` (Zod validation)
- Dynamic route: `src/pages/blog/[...slug].astro` uses `getStaticPaths()` and Astro 5's `render()` from `astro:content`

---

## Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 95+ | 100 |
| Lighthouse Accessibility | 95+ | 100 |
| Lighthouse Best Practices | 100 | 100 |
| Lighthouse SEO | 100 | 100 |
| LCP | < 1.8s | Passing |
| CLS | < 0.05 | Passing |

---

## Key Conventions

1. **Never use inline styles** — Tailwind classes only
2. **Never hardcode colors as hex** — use Tailwind tokens
3. **Data lives in `/src/data/`** — never hardcode content in components
4. **All images use `astro:assets`** — never raw `<img>` tags
5. **Self-host everything** — no external CDN requests for fonts/scripts
6. **Every page needs schema markup** — structured data is mandatory
7. **Component props must be typed** — TypeScript interfaces required
8. **SEO copy is keyword-optimized** — do not paraphrase headlines or meta descriptions
9. **One H1 per page** — primary keyword in first 100 words
10. **FAQ sections need FAQPage schema** — for Google featured snippets

---

## Build & Deploy

```bash
npm run dev        # Dev server at localhost:4321
npm run build      # SSG build → dist/
npm run preview    # Preview production build
```

Deploy: Push to `main` → Cloudflare Pages auto-deploys from GitHub.

---

## What's Left / Potential Improvements

- [ ] Real OG images (currently using placeholder path `/og-default.png`)
- [ ] Real client logos/photos for testimonials
- [ ] Analytics integration (Plausible or Fathom)
- [ ] Contact form backend (Formspree, Netlify Forms, or similar)
- [ ] More blog posts
- [ ] `solutions-new.ts` can be deleted (duplicate of `solutions.ts`)
- [ ] SVG logo to replace text-based logo fallback
- [ ] Additional case studies as clients come in
- [ ] Image assets for solution/integration pages (currently text-only)

---

## Reference

For the complete original build specification including all copy, content requirements, and phase-by-phase instructions, see **CLAUDE.md** in the project root.
