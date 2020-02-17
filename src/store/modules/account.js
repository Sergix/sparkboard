import router from '@/router'
import { stitchApp } from '@/stitch/app'
import {
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-browser-sdk'

const AUTH_ERROR = {
  46: 'Email already in use.',
  '-1': 'Unknown error. Please try again.',
}

const state = {
  authError: false,
  authErrorMessage: '',
}

const getters = {}

const mutations = {
  setAuthError(_, code) {
    state.authError = true
    state.authErrorMessage = AUTH_ERROR[code]
  },
  clearAuthError() {
    state.authError = false
    state.authErrorMessage = ''
  },
}

const actions = {
  //
  // TODO
  // this stuff really doesnt need to be in vuex actions.
  // just move it toa module in /stitch
  //

  login({ commit }, { email, password }) {
    if (stitchApp.auth.isLoggedIn) return

    const credential = new UserPasswordCredential(email, password)
    stitchApp.auth
      .loginWithCredential(credential)
      .then(() => {
        commit('clearAuthError')
        router.push('dashboard')
      })
      .catch(() => commit('setAuthError', '-1'))
  },

  create({ commit }, { email, password }) {
    if (stitchApp.auth.isLoggedIn) return

    // clear in case we're resubmitting
    commit('clearAuthError')

    const emailPasswordClient = stitchApp.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory,
    )
    emailPasswordClient
      .registerWithEmail(email, password)
      .then(() => router.push('dashboard'))
      .catch(err => commit('setAuthError', err.errorCode))
  },

  logout({ commit }) {
    if (!stitchApp.auth.isLoggedIn) return

    console.log('test')
    stitchApp.auth
      .logout()
      .then(() => {
        commit('logout')
        router.push('/')
      })
      .catch(err => console.error(err))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
