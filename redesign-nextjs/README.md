# Modern Premium Redesign — Next.js port

Drop-in replacement for `src/components/*` + `src/app/{page.tsx,globals.css}` that ports the **Modern Premium** design direction (option 04) into your Next.js + Tailwind + DaisyUI codebase.

## What's in here

```
redesign-nextjs/
└── src/
    ├── components/
    │   ├── Navbar.tsx      ← replaces existing
    │   ├── Hero.tsx        ← replaces existing
    │   ├── Stats.tsx       ← NEW (4-up stats band, between Hero and About)
    │   ├── About.tsx       ← replaces existing
    │   ├── Services.tsx    ← replaces existing
    │   ├── Contact.tsx     ← replaces existing
    │   └── Footer.tsx      ← replaces existing
    └── app/
        ├── page.tsx        ← replaces existing (adds <Stats /> after <Hero />)
        └── globals.css     ← replaces existing (new tokens, removes legacy dark-mode overrides)
```

## What you DON'T need to change

- **`src/i18n/translations.ts`** — all new components reuse the existing translation keys (`translations.about.story.title`, `translations.products.categories.cookers.types`, etc.). No additions needed.
- **`src/contexts/ThemeContext.tsx`** — untouched. New components consume `useTheme()` the same way.
- **`src/stores/languageStore.ts`** — untouched. New components consume `useLanguageStore()` the same way.
- **`src/app/layout.tsx`** — untouched. SEO metadata and `<html>` structure unchanged.
- **`tailwind.config.ts`** — untouched. The new design uses arbitrary value classes like `bg-[#993333]` so no theme keys need to be added. DaisyUI's `primary: #1d4ed8` is still unused dead config (same as before).
- **`public/images/*`** — all paths unchanged (`/images/logo.png`, `/images/products/*.jpg`, `/images/hero-bg.webp` — the last is no longer rendered but kept).
- **EmailJS env vars** — `NEXT_PUBLIC_EMAILJS_*` still consumed in the new `Contact.tsx`.

## Apply locally

```bash
# from the repo root
git checkout master
git pull
git checkout -b redesign/modern-premium

# copy files in (adjust the source path to wherever you downloaded this folder)
cp ~/Downloads/redesign-nextjs/src/components/*.tsx src/components/
cp ~/Downloads/redesign-nextjs/src/app/page.tsx src/app/page.tsx
cp ~/Downloads/redesign-nextjs/src/app/globals.css src/app/globals.css

# run locally — should pass type-check + look correct
npm run dev

# commit + push
git add src/
git commit -m "feat(redesign): modern premium UI direction

- Hero rebuilt as 2-col with featured product + floating spec sidecard
- New Stats band between Hero and About (20+ years / 8 models / 300L / 2 series)
- About uses light/bold headline + numbered 01/02 badges
- Services split into separate Cookers (#cookers) and Mixers (#mixers) sections
- Contact uses 2-col layout (info table + form card) and pill submit button
- Navbar collapses to a translucent backdrop-blur bar on scroll
- globals.css trimmed: removed legacy .dark .bg-white overrides that fought the new design"

git push -u origin redesign/modern-premium
```

Then open a PR on GitHub:
- https://github.com/MingLin1995/ShangHongMachine/pull/new/redesign/modern-premium

## What I changed in `globals.css` (important)

The **old** file had per-utility dark-mode overrides:

```css
.dark .bg-white { background-color: #2c2b29; }
.dark .text-gray-700 { color: #d1d5db; }
.dark .bg-gray-50 { background-color: #111827; }
/* …etc */
```

These were a workaround for the old design — every component used `bg-white` and relied on `.dark` to rewrite it. The new components use **Tailwind's `dark:` variant directly** (e.g. `bg-white dark:bg-[#242220]`), so those global overrides would actively fight the new colors and need to go.

If you have OTHER components elsewhere that still rely on these legacy overrides, restore the ones they need. Run a quick grep:

```bash
grep -rn "bg-white\|bg-gray-50\|bg-gray-700" src/
```

In the current codebase nothing outside `src/components/{Navbar,Hero,About,Services,Contact,Footer}.tsx` uses those, so removal is safe — but worth double-checking before merge.

## New section anchors

The old single `#services` section is now split into `#cookers` + `#mixers` — two anchors. The Navbar links update accordingly. If you have:
- inbound links from other places (sitemap, social posts, search snippets) pointing to `/#services`, they'll still scroll *somewhere reasonable* (browser falls back to top), but you may want a redirect or a small JS shim in `Services.tsx` like `<a id="services" />` to preserve the old anchor.

## Things to double-check before going live

1. **"20+ 年技術經驗"** in `Stats.tsx` — I inferred this from your existing SEO copy mentioning "20年以上". Confirm it's accurate (year company was founded?).
2. **Hero featured product is SH-301** — hard-coded in `Hero.tsx`. If you want to feature SH-401 (most powerful) or rotate seasonally, easy to change.
3. **New copy strings** — the about headline ("誠信與專業，是我們對客戶的承諾") and contact headline ("歡迎來訊，讓我們為您報價") are my paraphrases from your existing vision/about copy. Revise to taste.
4. **EmailJS env vars** — same names as before; no change needed in Vercel/your hosting.
5. **Catalog PDF** — link path `/catalogs/shanghong-catalog.pdf` unchanged.
