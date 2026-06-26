import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { WAVE, isSpokePath } from './src/config/launch.js';

export default defineConfig({
  site: 'https://citationgenerator.store',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    sitemap({
      // drop noindexed spokes from the sitemap during the current launch wave
      filter: (page) => !(WAVE.noindexSpokes && isSpokePath(new URL(page).pathname)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
