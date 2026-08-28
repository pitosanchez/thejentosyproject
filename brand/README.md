# Brand source files

Original logo assets supplied by the founder (2026-08-28). Not deployed —
`brand/` is outside `public/`.

- `logo-mark-bold.webp` — JP monogram, heavier circle. Source for the favicons
  and the small in-page marks (nav, footer, 404).
- `logo-mark-fine.webp` — JP monogram, finer crescent circle. Source for
  `public/logo-fine.png` (large / hero use).

Generated, deployed assets live in `public/`:
`favicon.ico`, `favicon.svg` (light/dark adaptive), `favicon-16/32.png`,
`apple-touch-icon.png`, `icon-192/512.png`, `site.webmanifest`,
`logo.png` (green, transparent), `logo-light.png` (cream, for dark surfaces),
`logo-fine.png`, and the `og-image*.jpg` share cards.

To regenerate after a logo change, re-run the ImageMagick steps from the
commit that introduced these (git log -- public/favicon.svg).
