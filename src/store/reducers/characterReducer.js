import {SET_CHARACTER, SET_CHARACTER_FAILED} from '../actions/characterAction';

const INITIAL_STATE = [];

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return [...state, ...action.payload];
    case SET_CHARACTER_FAILED:
      return state;
    default:
      return state;
  }
};

export default characterReducer;
