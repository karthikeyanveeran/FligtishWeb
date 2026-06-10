# La Flightish Global

**Corporate Website** — [flightishglobal.com](https://flightishglobal.com)

La Flightish Global Private Limited (CIN: U93000TN2018PTC126511)

## Tech Stack

- React 18 + Vite + Tailwind CSS + TypeScript
- Hosted on Oracle Cloud VM + Nginx
- CDN & DNS: Cloudflare (Free)
- CI/CD: GitHub Actions (auto-deploy on push to `main`)

## Development

```bash
npm install
npm run dev      # localhost:5173
npm run build    # outputs to dist/
```

## Deployment

Automatic on push to `main` via GitHub Actions → rsync to Oracle VM → Cloudflare cache purge.

See [DEPLOYMENT_READY.md](DEPLOYMENT_READY.md) for full setup details.
