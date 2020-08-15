//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";

const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
});

export default allReducers;
