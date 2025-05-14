import { defineConfig, transformerVariantGroup } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import type { IconifyJSON } from '@iconify/types';
import lineMd from '@iconify-json/line-md/icons.json';

export default defineConfig({
  shortcuts: {},
  rules: [],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#E01111',
        green: '#288E3E',
      },
      success: {
        DEFAULT: '#288E3E',
      },
      secondary: {
        120: '#672B11',
        DEFAULT: '#DBBB76',
        10: '#F3EEE5',
      },
      gray: {
        DEFAULT: '#000000',
        30: '#EAEAEA',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
  },
  transformers: [
    transformerVariantGroup(),
  ],
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        'line-md': () => lineMd as IconifyJSON,
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
});