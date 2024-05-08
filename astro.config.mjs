import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
  site: 'https://armandvf.github.io',
  integrations: [icon(), embeds(), mdx()]
});