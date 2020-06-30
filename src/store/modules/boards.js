const getBoardByTitle = title =>
  state.boards.find(board => board.title === title)
const isBoard = title =>
  state.boards.find(board => board.title === title) ? true : false

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
  editBoard(_, { title, newData }) {
    const index = state.boards.findIndex(board => board.title === title)
    Object.keys(newData).map(prop => {
      state.boards[index][prop] = newData[prop]
    })
  },
}

const actions = {
  // boardData = {
  //   title - edited board title
  //   newData - new board data
  // }
  editBoard({ commit }, boardData) {
    // don't let board have same title as another
    if (isBoard(boardData.newData.title)) return false
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
