# Ritika Dhingra — Portfolio

Next.js (App Router, React, TypeScript) site, deployed on Vercel (project `ritika-dhingra-portfolio`).
Every page is pre-rendered as static HTML at build time.

## Where things live

| Path | What it is |
|---|---|
| `app/page.tsx` | Home page |
| `app/<page>/page.tsx` | Every other page (e.g. `app/artwork/page.tsx` → `/artwork`), with its title and description at the top |
| `app/layout.tsx` | Shared shell: `<head>`, header, mobile menu, footer, back-to-top, site script |
| `components/` | Header, Footer, MobileMenu, Progress, ToTop, FallbackImg |
| `public/assets/css/style.css` | All styling |
| `public/assets/js/main.js` | Interactions (theme toggle, animations, carousel, filters, WhatsApp links). The WhatsApp number is `WA_NUMBER` here — still a placeholder. |
| `public/assets/img/` | Site images |
| `redirects.json` | Old `.html` addresses permanently redirect to the clean URLs |

## How changes go live

| Branch | What happens on push | URL |
|---|---|---|
| `dev` | Preview deployment for review | https://ritika-dhingra-portfolio-git-dev-tushars-projects-dd5d2206.vercel.app |
| `main` | **Production** | https://ritika-dhingra-portfolio.vercel.app |

1. Make changes on `dev` (switch the branch dropdown on GitHub to `dev` before editing).
2. Open the dev preview link and review.
3. When happy, open a pull request `dev` → `main` on GitHub and merge it. Production updates in about a minute.

Don't edit `main` directly — anything pushed there goes live straight away.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
