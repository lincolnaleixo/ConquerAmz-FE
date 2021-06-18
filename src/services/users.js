import axios from 'axios';
import { LoginUser, RegisterUser } from './api';

export default {
  createUser(userObject) {
    return new Promise((resolve, reject) => {
      axios.post(RegisterUser, userObject)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  loginUser(userObject) {
    return new Promise((resolve, reject) => {
      axios.post(LoginUser, userObject)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  getUser() {},
};
