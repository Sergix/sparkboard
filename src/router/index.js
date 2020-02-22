import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import ConfirmAccount from '../views/ConfirmAccount.vue'
import AccountConfirmed from '../views/AccountConfirmed.vue'
import Board from '../views/Board.vue'
import Dashboard from '../views/Dashboard.vue'
import { stitchApp } from '@/stitch/app'

Vue.use(VueRouter)

//
// requiresAuth
//   the page can only be accessed if logged in
//
// redirectToDashboard
//   if logged in, redirect to dashboard
//

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    meta: {
      transition: 'fade',
      requiresAuth: false,
      redirectToDashboard: false,
    },
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: ConfirmAccount,
    meta: {
      transition: 'fade',
      requiresAuth: false,
      redirectToDashboard: true,
    },
  },
  {
    path: '/confirmed',
    name: 'confirmed',
    component: AccountConfirmed,
    meta: {
      transition: 'fade',
      requiresAuth: false,
      redirectToDashboard: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      transition: 'fade-in-left',
      requiresAuth: false,
      redirectToDashboard: true,
    },
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: {
      transition: 'fade-in-left',
      requiresAuth: true,
      redirectToDashboard: false,
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      transition: 'fade-in-left',
      requiresAuth: true,
      redirectToDashboard: false,
    },
  },
  {
    path: '/new',
    name: 'new',
    component: CreateAccount,
    meta: {
      transition: 'fade-in-left',
      requiresAuth: false,
      redirectToDashboard: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if not logged in, redirect to login
    if (!stitchApp.auth.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.redirectToDashboard)) {
    // if logged in, redirect to dashboard
    if (stitchApp.auth.isLoggedIn) {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
