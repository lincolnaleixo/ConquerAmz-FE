import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';
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
  getUserDetails() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('jwtToken');
      const decoded = VueJwtDecode.decode(token);
      if (decoded) resolve(decoded);
      reject(Error('No token available!'));
    });
  },
};
