import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/A')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
