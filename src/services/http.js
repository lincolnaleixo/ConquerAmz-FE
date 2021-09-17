import axios from 'axios';
import { apiUrl } from '../../config';

class Http {
  constructor() {
    const service = axios.create({
      baseURL: apiUrl,
      // timeout: 60000, // indicates, 1000ms ie. 1 second
      // headers by default its application/json
      headers: {
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    service.interceptors.request.use(
      (config) => {
        const obj = { ...config };
        const authToken = window.localStorage.getItem('jwtToken');
        if (!authToken) {
          // const history = useHistory();
          // const { location } = window;
          // history.push('/login');
          // location.assign('/auth/login');
          const err = new Error('Unauthorized');
          return Promise.reject(err);
        }
        obj.headers.common.Authorization = `Bearer ${authToken}`;
        return obj;
      },
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          // Redirect unauthorized calls:
          window.localStorage.removeItem('jwtToken');
        }
        return Promise.reject(error);
      },
    );
    this.service = service;
  }

  get(path, payload) {
    if (payload) {
      return this.service.get(path, payload);
    }
    return this.service.get(path);
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }

  put(path, payload) {
    return this.service.put(path, payload);
  }

  patch(path, payload) {
    return this.service.patch(path, payload);
  }

  delete(path, payload) {
    return this.service.delete(path, payload);
  }
}

export default new Http();
