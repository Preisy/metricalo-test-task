import presetRemToPx from '@unocss/preset-rem-to-px'
import type { Theme } from '@unocss/preset-uno'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss'

export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx(),
    presetIcons({
      collections: {},
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      bg: '#FFF',
      primary: '#4F62E5',
      secondary: '#6BDA97',
      tertiary: '#666666',
    },
    fontSize: {
      sm: ['12px', '12px'],
      md: ['14px', '14px'],
      lg: ['16px', '16px'],
      xl: ['24px', '24px'],
      '2xl': ['32px', '32px'],
    },
    breakpoints: {
      sm: '450px',
      md: '900px',
      xl: '1280px',
    },
  },
  preflights: [],
  rules: [],
})
