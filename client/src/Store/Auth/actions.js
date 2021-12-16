import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const authSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const authFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}