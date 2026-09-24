# 24Telemed Foundation website

React + TypeScript + Vite single-page site for the 24Telemed Foundation.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Editing content

Most content lives in `src/data.ts`:

- `PAYPAL_URL` — the PayPal donate link. While it is empty, the "Donate via PayPal" button scrolls to the bank details.
- `org` — address, phone, EIN and bank details.
- `founder` / `team` — names, roles and photos (photos in `src/assets/team/`).
- Partner logos: any `.png` added to `src/assets/partners/` shows up automatically.

Section copy is in `src/components/*.tsx`; styles and colours are in `src/index.css` (the `:root` variables at the top).

## Deploy to Vercel

Vercel detects Vite automatically (build: `npm run build`, output: `dist`).

- **Git:** push this repo to GitHub, then import it at vercel.com/new.
- **CLI:** `npx vercel` for a preview, `npx vercel --prod` for production.
