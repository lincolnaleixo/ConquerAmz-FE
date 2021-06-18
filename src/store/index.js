import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiError: null,
    user: null,
    userToken: null,
    isUserLoggedIn: false,
    sidebarOpened: true,
  },
  getters: {
    isUserLoggedIn: (state) => state.isUserLoggedIn,
    isApiWorking: (state) => state.apiError === null,
    getSidebarOpened: (state) => state.sidebarOpened,
    getUserToken: () => localStorage.getItem('jwtToken'),
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
    SET_API_ERROR(state, err) {
      state.apiError = err;
    },
  },
  actions,
});
