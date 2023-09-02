import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('@/modules/BD/Home')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
