import { ProcessReducer } from "./chat/chatReducer";
import { createStore,combineReducers } from "redux";

const reducers = combineReducers({ ProcessReducer: ProcessReducer});

export const store = createStore(reducers);

export default store;