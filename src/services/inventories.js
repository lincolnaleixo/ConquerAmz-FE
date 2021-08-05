import axios from 'axios';
import { GetInventories, GetOrders } from './api';

export default {
  getInventories(userId) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('jwtToken');
      const bearer = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
      axios.get(`${GetInventories}?userId=${userId}`, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  getOrders(userId) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('jwtToken');
      const bearer = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
      axios.get(`${GetOrders}?userId=${userId}`, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
