import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout/index.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/dashboard/Home.vue'),
        meta: { title: '分析页', keepAlive: true, permission: ['dashboard'] }
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/About.vue'),
        meta: { title: '列表页', keepAlive: false, permission: ['dashboard'] }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
