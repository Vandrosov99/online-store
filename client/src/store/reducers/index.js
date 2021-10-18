import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  AUTHORIZATION: loggedReducer,
});

export default allReducers;
