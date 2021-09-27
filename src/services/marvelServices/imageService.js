import marvelImageAxiosInstance from './marvelImageAxiosInstance';

export default {
  getCharacterPhoto: (url, size) => {
    url = url.slice(0, 4) + 's' + url.slice(4);
    console.log('url', url);
    return marvelImageAxiosInstance.get(url + size);
  },
};
