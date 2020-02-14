const getCardIndex = id => state.cards.findIndex(card => card.id === id)

const state = {
  // TESTING DATA
  cards: [
    {
      id: '1',
      title: 'card1',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit metus in consequat luctus. Morbi viverra erat non sem vehicula imperdiet. Cras pellentesque sem ut dolor commodo, in porttitor lorem semper. Integer non ante blandit, venenatis sem at, scelerisque odio.',
      img:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
      position: {
        x: 100,
        y: 100,
      },
      size: 300,
    },
    {
      id: '2',
      title: 'card2',
      desc: 'desc',
      img:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
      position: {
        x: 150,
        y: 150,
      },
      size: 300,
    },
    {
      id: '3',
      title: 'card3',
      desc: 'desc',
      img:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
      position: {
        x: 300,
        y: 300,
      },
      size: 300,
    },
  ],
  title: 'Test title',
  coverImg:
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
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
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
