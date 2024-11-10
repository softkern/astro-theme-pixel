import { defineConfig, presetTypography, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
  theme: {
    colors: {
      primary: '#4CAF50', // 自定义主色
    },
    fontFamily: {
      sans: 'Helvetica, Arial, sans-serif',
    },
  },
})
