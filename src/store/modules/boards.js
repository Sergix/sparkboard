import { boardsCollection } from '@/stitch/db'
import { stitchApp } from '@/stitch/app'

const getBoardByTitle = title =>
  state.boards.find(board => board.title === title)
// const getBoardById = id => state.boards.find(board => board.id === id)
// const getBoardIndex = title =>
//   state.boards.findIndex(board => board.title === title)
// const isBoard = title =>
//   state.boards.find(board => board.title === title) ? true : false

const state = {
  loadedBoards: false,
  boards: [],
}

const getters = {}

const mutations = {
  set(_, boards) {
    state.boards = boards
    state.loadedBoards = true
  },
  editBoard(_, { title, newBoard }) {
    const index = state.boards.findIndex(board => board.title === title)
    Object.keys(newBoard).map(prop => {
      state.boards[index][prop] = newBoard[prop]
    })
  },
}

const actions = {
  get({ commit }) {
    const query = {
      owner_id: stitchApp.auth.user.id,
    }

    boardsCollection
      .find(query)
      .toArray()
      .then(boards => {
        commit('set', boards)
      })
      .catch(err => console.log(err))
  },
  editBoard({ commit }, boardData) {
    commit('editBoard', boardData)
  },
  loadBoard({ commit }, title) {
    commit('currentBoard/set', getBoardByTitle(title), { root: true })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
