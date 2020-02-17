import Vue from 'vue'
import Vuex from 'vuex'
import board from '@/store/modules/board'
import account from '@/store/modules/account'
import { boardsCollection } from '@/stitch/db'

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
  },
  mutations: {
    setBoards(_, boards) {
      this.state.boards = boards
    },
  },
  actions: {
    getBoards({ commit }) {
      const query = {
        owner_id: account.state.id,
      }

      boardsCollection
        .find(query)
        .toArray()
        .then(boards => commit('setBoards', boards))
        .catch(err => console.error(err))
    },
    // loadBoard(boardId) {},
  },
  modules: {
    board,
    account,
  },
  strict: debug,
})
