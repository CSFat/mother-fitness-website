# 日日有力｜Complete Website Bundle (GitHub Pages fixed)

This bundle contains the complete editable website source and a corrected GitHub Pages export for the repository `mother-fitness-website`.

## Publish to GitHub Pages

Upload the **contents of `github-export/`** to the root of the GitHub repository. This export is built for:

https://csfat.github.io/mother-fitness-website/

It includes `index.html` at the folder root, project-subpath asset URLs, `404.html` for client-side route fallback, compiled assets, and the local hero image.

## Edit the website

The editable React/Vite project is in `source/`. From inside that folder:

```bash
pnpm install
pnpm dev
```

To make a GitHub Pages build for this repository:

```bash
VITE_BASE_PATH=/mother-fitness-website/ VITE_GITHUB_PAGES=true pnpm build
```
