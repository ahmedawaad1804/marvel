import axios from 'axios';
import { addOffset, hashURLKeys } from './characterUtility';

export default marvelImageAxiosInstance = axios.create();

marvelImageAxiosInstance.interceptors.request.use(async config => {
    config.url += hashURLKeys()
    return config;
}, error => {
    return Promise.reject(error);
});
marvelImageAxiosInstance.interceptors.response.use({}, error => {
    console.log('error', error);
    return Promise.reject(error);
});