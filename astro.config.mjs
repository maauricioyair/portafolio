import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  site: 'https://mauricioyair.github.io',
  base: '/portafolio',
  integrations: [
    tailwind(
      {
        applyBaseStyles: false,
      }
    ),
  ],
});
