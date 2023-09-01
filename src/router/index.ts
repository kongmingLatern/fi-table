import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/Base'),
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('@/layout/Home')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
