import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";


const user = async () => {
    let {data} = await axios.get("http://localhost:2345/profile", { withCredentials: true })
    
    return data;

}
const initState = {
    isAuth: false,
    user: user()
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
