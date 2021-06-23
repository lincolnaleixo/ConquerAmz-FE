import axios from 'axios';
import { GetUserConfig, SetUserConfig } from './api';

export default {
  getUserConfig(userId) {
    const urlPar = `${GetUserConfig}?userId=${userId}`;
    const token = localStorage.getItem('jwtToken');
    const bearer = `Bearer ${token}`;
    const config = {
      headers: {
        Authorization: bearer,
      },
    };
    return new Promise((resolve, reject) => {
      axios.get(urlPar, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  setUserConfig(configObject) {
    const token = localStorage.getItem('jwtToken');
    const bearer = `Bearer ${token}`;
    const config = {
      headers: {
        Authorization: bearer,
      },
    };
    return new Promise((resolve, reject) => {
      axios.post(SetUserConfig, configObject, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
