import axios from 'axios';
import configs from './config';
import {addOffset, hashURLKeys} from './characterUtility';

const marvelAxiosInstance = axios.create({
  baseURL: configs.MARVEL_DATA_CONFIG.domain,
});

marvelAxiosInstance.interceptors.request.use(
  async config => {
    config.url += hashURLKeys();
    config.offset ? (config.url += addOffset(config.offset)) : null;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
marvelAxiosInstance.interceptors.response.use({}, error => {
  console.log('error', error);
  return Promise.reject(error);
});

export default marvelAxiosInstance;
