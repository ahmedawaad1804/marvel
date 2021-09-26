import marvelImageAxiosInstance from './marvelImageAxiosInstance';

export default {
  getCharacterPhoto: (url, size) => {
    return marvelImageAxiosInstance.get(url + size);
  },
};
