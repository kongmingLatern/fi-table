import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: [
    { 'flex-center': 'flex items-center justify-center' }
  ]
})
