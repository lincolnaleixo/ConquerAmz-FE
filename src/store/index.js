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
    notificationObject: {
      title: '',
      type: '',
      text: '',
    },
  },

  getters: {
    isUserLoggedIn: (state) => state.isUserLoggedIn || localStorage.getItem('ConquerAmazonUserId'),
    isApiWorking: (state) => state.apiError === null,
    getSidebarOpened: (state) => state.sidebarOpened,
    getUserToken: () => localStorage.getItem('jwtToken'),
    getUser: (state) => state.user,
    getUserId: () => localStorage.getItem('ConquerAmazonUserId'),
    getNotificationObject: (state) => state.notificationObject,
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
    SET_NOTIFICATION(state, notObject) {
      state.notificationObject = notObject;
    },
  },

  actions,
});
