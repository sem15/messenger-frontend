import { createStore } from 'vuex'

const store = createStore({
  state: {
    currentTextChannel: 'General',
  },
  mutations: {
    changeTextChannel(state, payload) {
        state.currentTextChannel = payload
    },
  },
  getters: {
    getCurrentTextChannel(state) {
        return state.currentTextChannel
    }
  }
});

export default store;