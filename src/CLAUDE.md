# src — Rules

## Blog posts
- Asked to publish a blog post AND no top navbar exists → CREATE the navbar.
- ADD a tab labeled `Posts`, `Blog`, or `Articles` (pick by site mood).
- MATCH navbar UI to site mood.
- LINK the new tab to the blog post list page.
- DATA source → `src/lib/blog.ts` `getPosts()` (resilient fetch, never throws). `/blog` list + `/blog/[slug]`.
- RENDER post markdown with `createSatteriMarkdownProcessor` from `@astrojs/markdown-satteri` (Astro built-in). NO marked/unified.

## Icons — MANDATORY
- GENERIC icons → `@lucide/astro`: `import { IconName } from '@lucide/astro'`; `<IconName size={20} class="..." />`.
- BRAND/SOCIAL logos → `<SocialIcon name="instagram" />` from `src/components/SocialIcon.astro`. Props: `size`, `color`, `brand` (official color), `title` (a11y label). Lucide does NOT ship brand logos; importing them returns `undefined` and crashes render.
- Brand missing from `SocialIcon.astro` → ADD `{ brand, path }` to the `ICONS` map in that file. DO NOT add a new icon dep.
- IMPORT by NAME only: `import { Menu } from '@lucide/astro'`. NEVER `import * as`, default import, or deep file paths — they make Vite crawl the whole barrel → `vite:invoke`/`fetchModule` 60s timeout / blank page.
- VERIFY the icon name exists in Lucide; a wrong name resolves `undefined` and crashes/stalls render. Brand logo → SocialIcon, never Lucide.
- Hit that timeout in dev → `rm -rf node_modules/.vite && npm run dev`.
- NO inline SVGs elsewhere. NO other icon packs.

## Styling — MANDATORY
Tailwind utility classes ONLY. The goal is a tiny CSS payload — every hand-written rule bloats the bundle.
- WRITE styling as Tailwind utilities on the element: `class="flex gap-4 px-6 py-3 rounded-lg"`.
- DO NOT add `<style>` blocks in `.astro` files. DO NOT write `.css` files except `src/styles/global.css`.
- NEED a value Tailwind lacks → USE arbitrary values: `class="w-[37rem] text-[#1a1a1a]"`. Still no CSS file.
- REPEATED utility cluster across 3+ places → EXTRACT a component in `src/components/`, NOT a CSS class.
- DESIGN TOKENS (colors, fonts, spacing scale) → ADD them in `src/styles/global.css` via Tailwind's `@theme` directive only.
- NEVER mix inline `style="..."` and Tailwind on the same element.

## 404 page — MANDATORY
- `src/pages/404.astro` MUST exist on the first customization. NO default Astro 404 in production.
- MATCH the site's color palette, typography, spacing, and overall mood.
- INCLUDE a clear "back to home" link to `/` (real route, no placeholder).
- USE Tailwind utilities only. NO `<style>` blocks. NO inline `style="..."`.

## Self-update — MANDATORY
After changing anything in `src/` (except `src/layouts/`):
1. UPDATE this file if conventions changed.
2. KEEP ≤ 50 lines. IMPERATIVE only.
3. DELETE stale rules.
