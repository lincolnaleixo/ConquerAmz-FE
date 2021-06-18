import TestService from '../services/test';

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
  async logoutUser({ commit }) {
    localStorage.setItem('jwtToken', '');
    commit('TOGGLE_USER_LOGGED_IN');
    await this.$router.push({ path: '/' });
  },
  async checkToken({ state }) {
    const token = localStorage.getItem('jwtToken') || state.userToken;
    state.isUserLoggedIn = token !== null && token.length > 0;
  },
};

export default actions;
