import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CompositionDemo1 from '../views/CompositionDemo1.vue'
import CompositionDemo2 from '../views/CompositionDemo2.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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
  },
  {
    path: '/composition-demo1',
    name: 'CompositionDemo1',
    component: CompositionDemo1
  },
  {
    path: '/composition-demo2',
    name: 'CompositionDemo2',
    component: CompositionDemo2
  }
]

const router = new VueRouter({
  routes
})

export default router
