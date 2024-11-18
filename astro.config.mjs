// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import mdx from '@astrojs/mdx'
import { SITE } from './site.config'

import compress from '@playform/compress'

import expressiveCode from 'astro-expressive-code'

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
    mdx(),
  ],
})
