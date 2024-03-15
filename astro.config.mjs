import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://armandvf.github.io',
  integrations: [icon()]
});