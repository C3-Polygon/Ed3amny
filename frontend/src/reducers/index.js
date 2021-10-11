import { ProcessReducer } from "./chat/reducers";
import { createStore,combineReducers } from "redux";

const reducers = combineReducers({ ProcessReducer: ProcessReducer});

export const store = createStore(reducers);

export default store;