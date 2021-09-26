import dataService from 'services/marvelServices/dataService';

export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CHARACTER_FAILED = 'SET_CHARACTER_FAILED';

export const setCharacterList = data_offset => dispatch => {
  dataService
    .getCharacters({offset: data_offset})
    .then(res => {
      dispatch({
        type: 'SET_CHARACTER',
        payload: res.data.data.results,
      });
    })
    .catch(err => {
      console.log('error in fetch characters', err);
      dispatch({
        type: 'SET_CHARACTER_FAILED',
      });
    });
};
