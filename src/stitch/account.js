import { stitchApp } from '@/stitch/app'
import {
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-browser-sdk'
import router from '@/router'
import store from '@/store'

function logout() {
  if (!stitchApp.auth.isLoggedIn) return

  stitchApp.auth
    .logout()
    .then(() => {
      router.push('/')
    })
    .catch(err => console.error(err))
}

function login(email, password) {
  if (stitchApp.auth.isLoggedIn) return

  const credential = new UserPasswordCredential(email, password)
  stitchApp.auth
    .loginWithCredential(credential)
    .then(() => {
      router.push('dashboard')
    })
    .catch(() => store.commit('setAuthError', '-1'))
}

function create(email, password) {
  if (stitchApp.auth.isLoggedIn) return

  // clear in case we're resubmitting
  store.commit('clearAuthError')

  const emailPasswordClient = stitchApp.auth.getProviderClient(
    UserPasswordAuthProviderClient.factory,
  )
  emailPasswordClient
    .registerWithEmail(email, password)
    .then(() => router.push('dashboard'))
    .catch(err => store.commit('setAuthError', err.errorCode))
}

export { login, logout, create }
