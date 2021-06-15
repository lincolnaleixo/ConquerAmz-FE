import axios from 'axios';
import { allUsers, user } from './api';

export default {
  getUsers() {
    return new Promise((resolve, reject) => {
      axios.get(allUsers)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  createUser(userObject) {
    return new Promise((resolve, reject) => {
      axios.post(user, userObject)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  loginUser(userObject) {
    return new Promise((resolve, reject) => {
      axios.post(user, userObject)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};
