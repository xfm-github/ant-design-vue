import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout/index.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    // redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/dashboard/Home.vue'),
        meta: { title: '分析页', keepAlive: false, permission: ['dashboard'] }
      }
    ]
  },
  {
    path: '/custManage',
    name: 'custManage',
    redirect: '/custManage/custName',
    component: Layout,
    children: [
      {
        path: 'custName',
        name: 'custName',
        component: () => import('../views/custManage/custName.vue'),
        meta: { title: '账号管理', keepAlive: true }
      },
      {
        path: 'paramSet',
        name: 'paramSet',
        component: () => import('../views/custManage/component/paramSet.vue')
      }
    ]
  },
  {
    path: '/customerManage',
    name: 'customerManage',
    component: Layout,
    children: [
      {
        path: 'customerList',
        name: 'customerList',
        component: () => import('../views/customerManage/customerList.vue'),
        meta: { title: '账号管理', keepAlive: true }
      },
      {
        path: 'custDetail',
        name: 'custDetail',
        component: () => import('../views/customerManage/custDetail.vue'),
        meta: { title: '账号详情', keepAlive: true }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
