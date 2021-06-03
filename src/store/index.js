import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isUserLoggedIn: false,
    sidebarOpened: true,
  },
  getters: {
    isUserLoggedIn: (state) => state.isUserLoggedIn,
    getSidebarOpened: (state) => state.sidebarOpened,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    TOGGLE_USER_LOGGED_IN(state) {
      state.isUserLoggedIn = !state.isUserLoggedIn;
    },
    TOGGLE_SIDEBAR(state) {
      state.sidebarOpened = !state.sidebarOpened;
    },
  },
  actions: {
  },
});
