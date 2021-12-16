import { createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/reducer";


const reducer = combineReducers({
    auth: authReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());