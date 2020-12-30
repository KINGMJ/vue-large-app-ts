import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

// demo的个数
const demoCount = 3
let routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

/**
 * 生成demo的路由
 * @param demoCount demo个数
 */
const generateDemoRoutes = (demoCount: number) => {
  const demoRoutes = []
  for (let i = 1; i <= demoCount; i++) {
    demoRoutes.push({
      path: `/demo${i}`,
      name: `Demo${i}`,
      component: () => import(`@/views/Demo${i}.vue`)
    })
  }
  return demoRoutes
}

routes = routes.concat(generateDemoRoutes(demoCount))

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
