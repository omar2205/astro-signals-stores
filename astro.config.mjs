import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import preact from '@astrojs/preact'

import netlify from '@astrojs/netlify/edge-functions'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    preact({
      compat: true,
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
