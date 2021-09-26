import marvelAxiosInstance from './marvelAxiosInstance';

export default {
  getCharacters: offset => {
    return marvelAxiosInstance.get('/v1/public/characters', offset);
  },
};
