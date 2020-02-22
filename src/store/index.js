import Vue from 'vue'
import Vuex from 'vuex'
import board from '@/store/modules/board'
import account from '@/store/modules/account'
import { boardsCollection } from '@/stitch/db'
import { stitchApp } from '@/stitch/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    loadedBoards: false,
    boards: [],
    // uploadcare public API key
    uploadcare: '1a04bedf82ddca439330',
  },
  getters: {
    getBoardById: state => id => {
      return state.boards.find(board => board.id === id)
    },
    getBoardByTitle: state => title => {
      return state.boards.find(board => board.title === title)
    },
    getCurrentBoardTitle: () => {
      return board.state.title
    },
    isBoard: state => title => {
      return state.boards.find(board => board.title === title) ? true : false
    },
  },
  mutations: {
    setBoards(_, boards) {
      this.state.boards = boards
      this.state.loadedBoards = true
    },
  },
  actions: {
    getBoards({ commit }) {
      const query = {
        owner_id: stitchApp.auth.user.id,
      }

      return new Promise((resolve, reject) => {
        boardsCollection
          .find(query)
          .toArray()
          .then(boards => {
            commit('setBoards', boards)
            resolve()
          })
          .catch(() => reject())
      })
    },
    loadBoard({ commit }, title) {
      const board = this.getters.getBoardByTitle(title)
      commit('board/setBoard', board)
    },
  },
  modules: {
    board,
    account,
  },
  strict: debug,
})
