import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import Board from '../views/Board.vue'
import Dashboard from '../views/Dashboard.vue'
import { stitchApp } from '@/stitch/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    meta: {
      transition: 'fade',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      transition: 'fade-in-left',
    },
    beforeEnter: (to, from, next) => {
      if (stitchApp.auth.isLoggedIn) next('/dashboard')
      else next()
    },
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: {
      transition: 'fade-in-left',
    },
    beforeEnter: (to, from, next) => {
      if (!stitchApp.auth.isLoggedIn) next('/login')
      else next()
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      transition: 'fade-in-left',
    },
    beforeEnter: (to, from, next) => {
      if (!stitchApp.auth.isLoggedIn) next('/login')
      else next()
    },
  },
  {
    path: '/new',
    name: 'new',
    component: CreateAccount,
    meta: {
      transition: 'fade-in-left',
    },
    beforeEnter: (to, from, next) => {
      if (stitchApp.auth.isLoggedIn) next('/dashboard')
      else next()
    },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
