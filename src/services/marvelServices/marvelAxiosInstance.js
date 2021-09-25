import axios from 'axios';
import md5 from 'md5';
import configs from './config';
import { addOffset, hashURLKeys } from './characterUtility';

export default marvelAxiosInstance = axios.create({
    baseURL: configs.MARVEL_DATA_CONFIG.domain,
});

marvelAxiosInstance.interceptors.request.use(async config => {
    config.url += hashURLKeys()
    config.offset ? config.url += addOffset(config.offset) : null
    return config;
}, error => {
    return Promise.reject(error);
});
marvelAxiosInstance.interceptors.response.use({}, error => {
    console.log('error', error);
    return Promise.reject(error);
});