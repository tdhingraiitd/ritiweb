# Ritika Dhingra — Portfolio

Static HTML/CSS/JS portfolio site. No build step.

- `src/` — the site (pages, `assets/css/style.css`, `assets/js/main.js`)
- Deployed on Vercel (project `ritika-dhingra-portfolio`).

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
cd src && python3 -m http.server 8000
# open http://localhost:8000
```

## Note
The WhatsApp number in `src/assets/js/main.js` (`WA_NUMBER`) is still a placeholder.
