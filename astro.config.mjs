import { defineConfig } from 'astro/config'
import htmx from 'astro-htmx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    htmx()
  ],
  output: 'server',
  adapter: cloudflare({ imageService: 'cloudflare' })
})
