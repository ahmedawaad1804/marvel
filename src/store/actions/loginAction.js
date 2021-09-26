// action types

export const IS_LOGIN = 'IS_LOGIN';
export const setLogin = data => dispatch => {
  dispatch({
    type: IS_LOGIN,
    payload: data,
  });
};
