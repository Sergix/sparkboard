import Vue from 'vue'
import Vuex from 'vuex'
import board from '@/store/modules/board'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    boards: [],
  },
  mutations: {},
  actions: {},
  modules: {
    board,
  },
  strict: debug,
})
