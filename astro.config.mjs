import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://lucasfrutig0.github.io/',
  base: '/pitchdata',
  output: 'server',
  adapter: cloudflare()
});