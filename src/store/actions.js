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
};

export default actions;
