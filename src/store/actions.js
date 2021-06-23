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
  async logoutUser({ commit }) {
    localStorage.setItem('jwtToken', '');
    commit('TOGGLE_USER_LOGGED_IN');
    await router.replace({ path: '/' });
  },
  async checkToken({ state }) {
    const token = localStorage.getItem('jwtToken') || state.userToken;
    state.isUserLoggedIn = token !== null && token.length > 0;
  },
  getUserData({ commit, dispatch }) {
    UserServices.getUserDetails()
      .then((res) => commit('SET_USER', res))
      .catch((err) => {
        dispatch('notify', {
          text: err.data,
          type: 'error',
          title: 'Could not get User data!',
        });
      });
  },
};

export default actions;
