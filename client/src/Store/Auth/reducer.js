import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initState = {
    isAuth: false,
    user: null
}

export const authReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                user: payload
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isAuth: false,
                user: null
            }
        }
        default:
            return state;
    }
}
