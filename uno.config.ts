import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-light-surface dark:bg-dark-surface',
    'color-base': 'text-light-text dark:text-dark-text',
    'terminal-window':
      'border border-light-border dark:border-primary-500/30 bg-light-card dark:bg-black/20 overflow-hidden rounded-lg shadow-sm',
    'terminal-header':
      'flex items-center gap-2 px-4 py-2 bg-light-surface dark:bg-black/40 border-b border-light-border dark:border-primary-500/30',
    'terminal-content': 'p-4 font-mono text-light-text dark:text-primary-500 space-y-2',
    'pixel-border':
      'border-2 border-light-border dark:border-primary-500/30 relative before:absolute before:inset-0 before:border-2 before:border-light-border/50 dark:before:border-primary-500/20 before:translate-x-1 before:translate-y-1',
    'grid-bg':
      'relative before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,179,107,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,179,107,0.1)_1px,transparent_1px)] dark:before:bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.1)_1px,transparent_1px)] before:bg-[size:32px_32px] before:opacity-20',
  },
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        pixelarticons: () => import('@iconify-json/pixelarticons/icons.json').then((i) => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        mono: 'IBM Plex Mono',
        pixel: 'Press Start 2P',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00b36b',
        50: '#e6fff2',
        100: '#ccffe6',
        200: '#99ffcc',
        300: '#66ffb3',
        400: '#33ff99',
        500: '#00b36b',
        600: '#009959',
        700: '#007f47',
        800: '#006635',
        900: '#004d28',
      },
      light: {
        surface: '#f8fafc',
        card: '#ffffff',
        border: '#e2e8f0',
        text: '#334155',
        muted: '#64748b',
        scrollbar: '#b8babc',
      },
      dark: {
        surface: '#0f172a',
        card: '#1e293b',
        border: '#334155',
        text: '#e2e8f0',
        muted: '#94a3b8',
        scrollbar: '#b8babbc',
      },
    },
  },
})
