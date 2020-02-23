import Vue from 'vue'
import Vuex from 'vuex'
import currentBoard from '@/store/modules/currentBoard'
import boards from '@/store/modules/boards'
import account from '@/store/modules/account'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    // uploadcare public API key
    uploadcare: '1a04bedf82ddca439330',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    boards,
    currentBoard,
    account,
  },
  strict: debug,
})
