// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jentosy.org',
  // English lives at the root (/the-need/fsgs/); Spanish is prefixed
  // (/es/the-need/fsgs/). No automatic locale redirect — the site is static
  // on Cloudflare Pages — so a visible language toggle + hreflang tags do the
  // work. See .scratch/tjp-i18n-spec/map.md.
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Astro drops the root 404 automatically; the localized /es/404/ is a
      // normal route, so exclude it (and any future localized 404) by hand.
      filter: (page) => !/\/404\/?$/.test(page),
    }),
  ],
});
