//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applicationReducer from "./applicationReducer";

const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
  applicationReducer,
});

export default allReducers;
