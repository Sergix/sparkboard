const getCardIndex = id => state.cards.findIndex(card => card.id === id)

const state = {
  //
  // TODO
  // have card editing mapped to a stitch serverless function for storage?
  //
  cards: [],
  cardIDs: [],
  title: '',
}

const getters = {}

const mutations = {
  editTitle(_, title) {
    state.title = title
  },
  pushCard(_, card) {
    state.cards.push(card)
  },
  deleteCard(_, id) {
    state.cards.splice(getCardIndex(id), 1)
  },
  shiftCard(_, { id, newIndex }) {
    state.cards.splice(newIndex, 0, state.cards.splice(getCardIndex(id), 1)[0])
  },
  editCard(_, { id, ...cardInfo }) {
    const cardIndex = getCardIndex(id)
    Object.keys(cardInfo).map(prop => {
      state.cards[cardIndex][prop] = cardInfo[prop]
    })
  },
  setCards(_, cardList) {
    state.cards = cardList
  },
  set(_, board) {
    state.cards = board.cards
    state.title = board.title
  },
}

const actions = {
  editTitle({ commit }, title) {
    commit('editTitle', title)
  },
  addCard({ commit }, card) {
    // TODO
    //
    // send UUID and other info to backend, then use returned ID from backend for card ID
    //
    commit('pushCard', card)
  },
  removeCard({ commit }, id) {
    commit('deleteCard', id)
  },
  shiftCard({ commit }, id) {
    commit('shiftCard', id)
  },
  editCard({ commit }, cardInfo) {
    commit('editCard', cardInfo)
  },
  setCards({ commit }, cardList) {
    commit('setCards', cardList)
  },

  save({ commit }, title) {
    commit('boards/editBoard', { title, newData: state }, { root: true })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
