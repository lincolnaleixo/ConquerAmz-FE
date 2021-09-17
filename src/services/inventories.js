// import axios from 'axios';
import Http from './http';
import { GetInventories, GetOrders, GetLatestOrders } from './api';

export default {
  getInventories(userId) {
    return new Promise((resolve, reject) => {
      Http.get(`${GetInventories}?userId=${userId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  getOrders(userId) {
    return new Promise((resolve, reject) => {
      Http.get(`${GetOrders}?userId=${userId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  getLatestOrders(userId) {
    return new Promise((resolve, reject) => {
      Http.get(`${GetLatestOrders}?userId=${userId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
