import axios from 'axios';
import { GetUserConfig, SetUserConfig } from './api';

export default {
  getUserConfig(userId) {
    const urlPar = `${GetUserConfig}?userId=${userId}`;
    return new Promise((resolve, reject) => {
      axios.get(urlPar)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  setUserConfig(configObject) {
    return new Promise((resolve, reject) => {
      axios.post(SetUserConfig, configObject)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
