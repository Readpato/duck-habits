import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins',
      },
    }),
  ],
})
