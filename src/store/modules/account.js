const AUTH_ERROR = {
  46: 'Email already in use.',
  '-1': 'Unknown error. Please try again.',
}

// TODO
// probably replace some of this functionality with xstate eventually
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

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
