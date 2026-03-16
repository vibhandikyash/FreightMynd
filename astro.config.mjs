// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  site: 'https://freightmynd.com',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.includes('/thank-you'),
    serialize(item) {
      const url = item.url;
      if (url === 'https://freightmynd.com/') {
        item.priority = 1.0;
        item.changefreq = 'weekly';
      } else if (url.includes('/solutions/') && !url.endsWith('/solutions/')) {
        item.priority = 0.9;
        item.changefreq = 'monthly';
      } else if (url.includes('/integrations/') && !url.endsWith('/integrations/')) {
        item.priority = 0.9;
        item.changefreq = 'monthly';
      } else if (url.includes('/case-studies/') && !url.endsWith('/case-studies/')) {
        item.priority = 0.8;
        item.changefreq = 'monthly';
      } else {
        item.priority = 0.7;
        item.changefreq = 'weekly';
      }
      return item;
    },
  }), mdx()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    remotePatterns: [],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
});

