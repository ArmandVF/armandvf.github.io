import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({site: 'https://armandvf.github.io',
  redirects: [{'/' : 'https://youtu.be/x43L8cieuXw?si=UJyLhjizqbW8g0nC'}],
  integrations: [icon()]
})