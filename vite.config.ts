import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      configFile: './unocss.config.ts'
    }),
    vueJsx(),
    AutoImport({
      imports: ['vue']
    }),
    Components({
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
