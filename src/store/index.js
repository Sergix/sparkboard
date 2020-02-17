import Vue from 'vue'
import Vuex from 'vuex'
import board from '@/store/modules/board'
import account from '@/store/modules/account'
import router from '@/router'
import { boardsCollection } from '@/stitch/db'
import { stitchApp } from '@/stitch/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    boards: [],
    // uploadcare public API key
    uploadcare: '1a04bedf82ddca439330',
  },
  getters: {
    getBoardById: (state = this.state) => id => {
      return state.boards.find(board => board.id === id)
    },
    getBoardByTitle: (state = this.state) => title => {
      return state.boards.find(board => board.title === title)
    },
    getCurrentBoard: () => {
      return board
    },
  },
  mutations: {
    setBoards(_, boards) {
      this.state.boards = boards
    },
  },
  actions: {
    getBoards({ commit }) {
      const query = {
        owner_id: stitchApp.auth.user.id,
      }
      boardsCollection
        .find(query)
        .toArray()
        .then(boards => commit('setBoards', boards))
        .catch(err => console.error(err))
    },
    loadBoard({ commit }, title) {
      const board = this.getters.getBoardByTitle(title)
      commit('board/setBoard', board)
      router.push('board')
    },
  },
  modules: {
    board,
    account,
  },
  strict: debug,
})
