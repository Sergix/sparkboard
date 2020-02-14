import Vue from 'vue'
import Vuex from 'vuex'
import board from '@/store/modules/board'
import account from '@/store/modules/account'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    //
    // array objects containing boards
    // TEMP
    //
    boards: [
      {
        title: 'Company Branding',
        id: '1',
        img:
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ligula vitae dolor dictum elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ligula vitae dolor dictum elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ligula vitae dolor dictum elementum.',
        // array of card IDs
        cards: ['1', '2', '3'],
      },
      {
        title: 'yeet',
        id: '2',
        img:
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ligula vitae dolor dictum elementum.',
        // array of card IDs
        cards: ['1', '2', '3'],
      },
      {
        title: 'asdfasdfasdf',
        id: '3',
        img:
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2afd190691337.5e1e0a7bbdeba.jpg',
        desc:
          'Hello World asdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        // array of card IDs
        cards: ['1', '2', '3', '4'],
      },
    ],
    // uploadcare public API key
    uploadcare: '1a04bedf82ddca439330',
  },
  getters: {
    getBoardById: (state = this.state) => id => {
      return state.boards.find(board => board.id === id)
    },
  },
  //
  // TODO
  // create an action that will load a selected board into the state
  // and will have the ability to grab the cards through the backend
  //
  mutations: {},
  actions: {
    loadBoard(boardId) {},
  },
  modules: {
    board,
    account,
  },
  strict: debug,
})
