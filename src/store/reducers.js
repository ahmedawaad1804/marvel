import { combineReducers } from 'redux';

import loginReducer from './reducers/loginReducer';
import characterReducer from './reducers/characterReducer';




const reducer = combineReducers({
    loginReducer,
    characterReducer
})

export default reducer