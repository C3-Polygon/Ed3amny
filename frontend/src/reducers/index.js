import { ProcessReducer } from "./chat/chatReducer";
import { createStore, combineReducers } from "redux";
import token from "./login/token";
import isLoggedIn from "./login/isLoggedIn";
import userId from "./login/userId";
import img from "./Donation/ImageReducer";
import title from "./Donation/TitleReducer";
import amount from "./Donation/AmountReducer"

const reducers = combineReducers({
  token_1: token,
  isLoggedIn: isLoggedIn,
  userId: userId,
  ProcessReducer: ProcessReducer,
  img: img,
  title:title,
  amount:amount
});

export const store = createStore(reducers);

export default store;
