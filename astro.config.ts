import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [icon(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'pt', 'ru', 'tr', 'ar'],
  },
});
