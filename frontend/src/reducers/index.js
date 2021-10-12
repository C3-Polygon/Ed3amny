import { ProcessReducer } from "./chat/chatReducer";
import { createStore,combineReducers } from "redux";
import token from "./login/token";
import isLoggedIn from "./login/isLoggedIn";
import userId from "./login/userId";

const reducers = combineReducers({
    token_1: token,
    isLoggedIn: isLoggedIn,
    userId: userId,
     ProcessReducer: ProcessReducer});

export const store = createStore(reducers);

export default store;