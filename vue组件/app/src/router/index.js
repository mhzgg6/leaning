import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form')
  },
  {
    path: '/find',
    name: 'componentA',
    component: () => import('../views/findComponent')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../views/checkbox')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('../views/alert')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/table')
  },
  {
    path: '/table-slot',
    name: 'Table',
    component: () => import('../views/table-slot')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
