// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://sakr.me',
  integrations: [sitemap(), react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
