# layouts — Rules

## Title & favicon
- Given a website title → CHANGE the title inside the layout.
- Given/visible a brand logo → REPLACE the favicon with it.
- OUTPUT `favicon.svg` (and `favicon.ico` if needed) into `public/` at the root.
- ENSURE the browser tab is clean and cohesive.

## Global CSS — MANDATORY
- IMPORT `../styles/global.css` in `Layout.astro` frontmatter. KEEP it imported.
- `src/styles/global.css` is the ONLY stylesheet — its single job is `@import "tailwindcss";` plus `@theme { ... }` tokens.
- NO `<style>` blocks in layouts. Use Tailwind utility classes on elements instead.

## Spacing — MANDATORY
Content must BREATHE. Nothing should sit flush against the viewport or its container.
- ENFORCE a minimum safe margin/padding on top, right, bottom, AND left of every page wrapper.
- NEVER let text, buttons, cards, or media touch the edge of the screen on any breakpoint.
- SCALE spacing with viewport: tighter on mobile, generous on desktop — but NEVER zero.
- WHEN scraping a URL for inspiration, INSPECT its outer padding/margins and MIRROR that breathing room in our layout.
- TREAT edge-flush content as a bug, fix BEFORE shipping.

## Self-update — MANDATORY
After changing anything in `src/layouts/`:
1. UPDATE this file if conventions changed.
2. KEEP ≤ 50 lines. IMPERATIVE only.
3. DELETE stale rules.
