// @ts-check
import { defineConfig } from 'astro/config'
import { SITE } from './site.config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import compress from '@playform/compress'
import expressiveCode from 'astro-expressive-code'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    expressiveCode({
      // useThemedScrollbars: true,
      themeCssSelector: (theme) => `.${theme.type}`,
      themes: ['catppuccin-mocha', 'catppuccin-latte'],
      styleOverrides: {
        borderRadius: '0.5em',
      },
    }),
    compress(),
    sitemap(),
    mdx(),
  ],
})
