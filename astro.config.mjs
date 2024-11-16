// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import mdx from '@astrojs/mdx'
import { SITE } from './site.config'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    mdx(),
  ],
})
