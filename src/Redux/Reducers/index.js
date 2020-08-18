//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from './contactReducer'

const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
  contactReducer
});

export default allReducers;
