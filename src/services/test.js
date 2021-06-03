import axios from 'axios';
import testApi from './api';

export default {
  testApi() {
    return new Promise((resolve, reject) => {
      axios.get(testApi)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error));
    });
  },
};
