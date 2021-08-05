import Vue from 'vue';
import router from '../router';
import TestService from '../services/test';
import UserServices from '../services/users';

const actions = {
  testApi({ commit }) {
    return new Promise((resolve, reject) => {
      TestService.testApi()
        .then((res) => {
          console.log('API response from b.e.: ', res);
          resolve(res);
        })
        .catch((err) => {
          commit('SET_API_ERROR', err);
          reject(err);
        });
    });
  },
  notify({ commit }, notifObj) {
    commit('SET_NOTIFICATION', notifObj);
    Vue.notify(notifObj);
  },
  async logoutUser({ commit, dispatch }) {
    localStorage.setItem('jwtToken', '');
    localStorage.setItem('ConquerAmazonUserId', '');
    commit('TOGGLE_USER_LOGGED_IN');
    dispatch('notify', {
      type: 'info',
      text: 'You Logged out successfully!',
      title: 'Bye!',
    });
    await router.replace({ path: '/' });
  },
  async checkToken({ state }) {
    const token = localStorage.getItem('jwtToken') || state.userToken;
    state.isUserLoggedIn = token !== null && token.length > 0;
    return token;
  },
  getUserData({ commit }) {
    UserServices.getUserDetails()
      .then((res) => {
        commit('SET_USER', res);
        // eslint-disable-next-line no-underscore-dangle
        localStorage.setItem('ConquerAmazonUserId', res._id);
        // eslint-disable-next-line no-underscore-dangle
        return res._id;
      })
      .catch(() => {});
  },
};

export default actions;
