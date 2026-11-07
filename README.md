# 日日有力｜Complete Website Bundle

This bundle contains the complete editable website source and a compiled export ready for GitHub Pages.

## Publish to GitHub Pages

Upload the **contents of `github-export/`** to the root of your GitHub repository. That folder already contains `index.html` at its own root, `404.html` for client-side route fallback, compiled assets, the local hero image, and a README.

## Edit the website

The editable React/Vite project is in `source/`. From inside that folder:

```bash
pnpm install
pnpm dev
```

To rebuild the static site:

```bash
pnpm build
```

The project uses client-side routes for `/understand`, `/moves`, `/plan`, `/fuel`, `/safety`, and `/laundry`. The GitHub export includes `404.html` so GitHub Pages can fall back to the app shell when a route is opened directly.

The existing laundry tribute page is preserved at `/laundry`.
