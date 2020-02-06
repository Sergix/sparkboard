const getCardIndex = id => state.cards.findIndex(card => card.id === id)

const state = {
  // TESTING DATA
  cards: [
    {
      id: '1',
      title: 'card1',
      desc: 'testlol',
      img:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
    },
    {
      id: '2',
      title: 'card2',
      desc: 'desc',
      img:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
    },
    {
      id: '3',
      title: 'card3',
      desc: 'desc',
      img:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
    },
  ],
  title: 'Test title',
}

const getters = {}

const mutations = {
  pushCard(card) {
    state.cards.push(card)
  },
  deleteCard(_, id) {
    state.cards.splice(getCardIndex(id), 1)
  },
  shiftCard(id, newIndex) {
    state.cards.splice(newIndex, 0, state.cards.splice(getCardIndex(id), 1)[0])
  },
  editCard(_, { id, property, newValue }) {
    state.cards[getCardIndex(id)][property] = newValue
  },
  setCards(_, cardList) {
    state.cards = cardList
  },
}

const actions = {
  addCard({ commit }, card) {
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
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
