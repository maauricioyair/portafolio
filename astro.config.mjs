import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(
      {
        applyBaseStyles: false,
      }
    ),
  ],
});
