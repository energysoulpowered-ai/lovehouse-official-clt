# CLAUDE.md

## Stack
Astro static site. Strict TS. Tailwind CSS v4 (via `@tailwindcss/vite`). Zero client JS by default.

## Commands
- `npm run dev` — dev at :4321
- `npm run check` / `npm run build` — types + build. HEALTH GATE: both MUST pass before work is done (Stop hook re-runs & blocks).
- `npm run preview` — preview build
- `npm run astro` — Astro CLI

## Onboarding

- FILL the values between brackets in `./impeccable.md` file when receiving onboarding values.

## Routing
`src/pages/*.astro` → URL. `index.astro` → `/`.
- WIRE every button, tab, card, and link to an EXISTING route in `src/pages/`.

## Blog — MANDATORY
Building a blog is a routing contract: every interactive element MUST land on a real page. A 404 is a blocking bug, never a polish item.
- BEFORE creating a link, CONFIRM the target page file exists; if missing, CREATE it first.
- VERIFY each `href` end-to-end: post list → post page, navbar tab → list, "back"/"home" → correct parent, pagination → real next/prev.
- NEVER use placeholder hrefs (`#`, `/todo`, `/coming-soon`) on a delivered blog.
- AFTER building, WALK every link in the rendered output and confirm none 404.
- A single 404 means the blog is NOT done. FIX before reporting completion.

## Icons — MANDATORY (read before importing ANY icon)
- Generic icons → `@lucide/astro`: `import { IconName } from '@lucide/astro'`.
- Brand/social logos (Instagram, X, Facebook, LinkedIn, Apple, Android, iOS, …) are NOT in Lucide — importing them returns `undefined` and crashes render.
- For brand logos → USE `<SocialIcon name="instagram" />` from [src/components/SocialIcon.astro](src/components/SocialIcon.astro). Props: `size`, `color`, `brand` (official color), `title` (a11y). NEVER import a brand name from `@lucide/astro`.
- Brand missing from `SocialIcon.astro` → ADD `{ brand, path }` to its `ICONS` map. DO NOT add a new icon dep.
- IMPORT BY NAME only — `import { Menu } from '@lucide/astro'`. NEVER `import * as`, default, or deep paths; they crawl the full barrel → 60s `vite:invoke`/`fetchModule` timeout / blank page. CONFIRM the name exists (wrong name = `undefined` = crash/stall).
- Hit that timeout in dev → `rm -rf node_modules/.vite && npm run dev`.

## Customization — MANDATORY (on FIRST customization of the site)
- Icon/logo from user → WRITE to `public/favicon.svg` (+ `.ico` if raster); WIRE in layout `<head>`; OVERWRITE existing.
- CREATE/STYLE `src/pages/404.astro` to MATCH the site's mood, palette, typography, and tone. NEVER ship the default Astro 404.

## Sub-rules — READ BEFORE EDITING
- Editing `src/**` → READ [src/CLAUDE.md](src/CLAUDE.md)
- Editing `src/layouts/**` → READ [src/layouts/CLAUDE.md](src/layouts/CLAUDE.md)

## Self-update — MANDATORY
After ANY change to code, structure, commands, or conventions:
1. UPDATE the CLAUDE.md closest to the changed file.
2. UPDATE this root CLAUDE.md if stack/commands/routing changed.
3. KEEP each CLAUDE.md ≤ 50 lines. IMPERATIVE only. NO prose.
4. ADD a sub-rule link here when creating a new CLAUDE.md.
5. DELETE stale rules.
