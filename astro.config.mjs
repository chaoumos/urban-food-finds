import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://urban-food-finds.example.com',
  integrations: [tailwind()],
  output: 'static',
});
