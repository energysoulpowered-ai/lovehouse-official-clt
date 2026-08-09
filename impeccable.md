## Design Context

### Source
Reimagined from **lovehouseofficialclt.com** — the underground house-music brand LoveHouse Official CLT (Charlotte, NC).

### Users
Charlotte's house-music community and the wider underground dance scene: clubgoers, ravers, DJs, promoters, vinyl heads, and soulful/deep-house fans looking for real events, mixes, culture, and merch. They value authenticity, inclusivity, and the collective energy of the dance floor.

### Brand Personality
Bold, raw, and unapologetically underground — yet warm and welcoming ("JOIN THE PARTY!"). LoveHouse is a love letter to house music: gritty and grassroots, but soulful and community-first. Voice is confident, punchy, and human. Speak in short, rhythmic, capitalized statements that feel like they belong on a flyer or a record sleeve. Never corporate, never cold.

### Aesthetic Direction
- **Visual tone & theme**: Dark mode by default. Deep black nightclub backdrop with high-contrast neon and grain — cinematic, after-dark, high energy. Distressed / grunge textures over clean modern layout.
- **Color palette**:
  - Ink Black `#0A0708` — primary background
  - Off-White `#F5F0EE` — primary text on dark
  - LoveHouse Red `#E6142B` — the heart; primary brand accent & CTAs
  - Deep Crimson `#8E0E22` — secondary red / gradient shade, panels
  - Neon Magenta `#D6249F` — club-light accent, gradients, hovers
  - Electric Blue `#3B4FE0` / Violet `#6C2BD9` — cool club-light accent for gradients & glows
  - Muted Ash `#8A8082` — secondary/dimmed text
- **Typography**:
  - Display / headlines: a heavy condensed sans (system: `Archivo`/`Arial Black` fallback stack) — UPPERCASE, tight tracking, bold weight, occasional soft glow/outline treatment. Evokes the distressed LOVE HOUSE logotype.
  - Body: clean humanist sans (`Inter`/system-ui) for readability at comfortable sizes.
- **Imagery**: DJs mid-mix under blue/magenta/red club lighting, silhouetted crowds with hands up, haze and lasers, disco-ball dot spheres. Grainy, high-contrast, film-like. Red heart logo used as the recurring brand mark.
- **Motifs**: the red heart, dotted disco-sphere textures, neon glow edges, gradient washes (crimson → magenta → violet).
- **References**: Underground house/techno party flyers, Boiler Room aesthetics, vinyl label art, Wix source site (dark hero + red banner + disco-ball strip).

### Site Purpose
Reintroduce LoveHouse Official CLT as a polished modern marketing site that captures the underground energy of the brand: showcase the LoveHouse sound (soulful & deep house), promote events and DJ bookings in Charlotte, share news & culture via the blog, and invite people to join the community. Static marketing frontend only — no logins or dashboards.

### Design Principles
- **Dark first, light in the accents.** Let the black breathe; use red/magenta/violet neon sparingly for punch and focus.
- **Loud typography, quiet layout.** Big, condensed, uppercase display type carries the energy; keep grids clean and spacious so it lands.
- **Every element breathes.** Generous, viewport-scaled padding — nothing flush to the edge.
- **Contrast is king.** High contrast text; imagery always darkened enough to keep copy legible.
- **One clear action per section.** Guide toward a single CTA (subscribe / book / view events).
- **Real brand marks.** Always use the red heart logo and authentic club imagery — never generic stock feel.
- **Tailwind utilities only.** Tokens live in `src/styles/global.css` `@theme`.
