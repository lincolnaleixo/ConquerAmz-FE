import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';
import { LoginUser, RegisterUser } from './api';

export default {
  createUser(userObject) {
    return new Promise((resolve, reject) => {
      axios.post(RegisterUser, userObject, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  loginUser(userObject) {
    return new Promise((resolve, reject) => {
      axios.post(LoginUser, userObject, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
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
