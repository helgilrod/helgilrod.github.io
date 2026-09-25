# LUMÉA

Conceptual premium skincare showcase inspired by Korean beauty, with a scroll-led product collection experience.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
pnpm build
```

## Structure

- `app/` — Next.js App Router entrypoints and global styles
- `components/` — navigation, hero, product carousel, renders, and footer
- `data/products.ts` — editable product collection data
- `public/` — static assets

Product renders are CSS-based so the showcase stays self-contained. They can be replaced by image assets inside `ProductRender` without changing the product data model.
