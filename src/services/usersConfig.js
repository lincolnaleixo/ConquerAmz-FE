import Http from './http';
import { GetUserConfig, SetUserConfig } from './api';

export default {
  getUserConfig(userId) {
    const urlPar = `${GetUserConfig}?userId=${userId}`;
    return new Promise((resolve, reject) => {
      Http.get(urlPar)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  setUserConfig(configObject) {
    return new Promise((resolve, reject) => {
      Http.post(SetUserConfig, configObject)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
