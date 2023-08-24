import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import 'uno.css'

createApp(App).use(Antd).use(router).mount('#app')
