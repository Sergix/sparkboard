import router from '@/router'
import { stitchApp } from '@/stitch/app'
import {
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-browser-sdk'

const state = {
  authError: false,
  email: String,
  id: String,
}

const getters = {}

const mutations = {
  authed(_, user) {
    state.authError = false
    state.email = user.profile.data.email
    state.id = user.id
  },
  created(_, email) {
    state.authError = false
    state.email = email
  },
  load() {
    state.email = stitchApp.auth.currentUser.profile.data.email
    state.id = stitchApp.auth.currentUser.id
  },
  logout() {
    state.email = ''
    state.id = ''
  },
  setAuthError(_, err) {
    state.authError = err
  },
}

const actions = {
  login({ commit }, { email, password }) {
    if (stitchApp.auth.isLoggedIn) return

    const credential = new UserPasswordCredential(email, password)
    stitchApp.auth
      .loginWithCredential(credential)
      .then(authedUser => {
        commit('authed', authedUser)
        router.push('dashboard')
      })
      .catch(() => commit('setAuthError', true))
  },

  create({ commit }, { email, password }) {
    if (stitchApp.auth.isLoggedIn) return

    const emailPasswordClient = stitchApp.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory,
    )
    emailPasswordClient
      .registerWithEmail(email, password)
      .then(() => commit('created', email))
      .catch(err => console.error(err))
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
