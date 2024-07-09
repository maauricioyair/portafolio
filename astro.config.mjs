import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  site: 'https://mauricioyair.dev',  
  integrations: [
    tailwind(
      {
        applyBaseStyles: false,
      }
    ),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
