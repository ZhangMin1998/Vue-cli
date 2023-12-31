// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home'
// import About from '../views/about'
import { createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  }
]

const router = createRouter({
  mode: createWebHistory(),
  // base: process.env.BASE_URL,
  routes
})

export default router
