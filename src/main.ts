import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import 'uno.css'
import '@/assets/global.css'

createApp(App)
  .use(Antd)
  .use(router)
  .use(createPinia())
  .mount('#app')
