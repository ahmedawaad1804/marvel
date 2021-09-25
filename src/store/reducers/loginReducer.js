import {
    IS_LOGIN

} from '../actions/loginAction'

const INITIAL_STATE = null

const loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case IS_LOGIN:
            state = action.payload
            return state
        default:
            return state
    }
}

export default loginReducer