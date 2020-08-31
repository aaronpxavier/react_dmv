//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from './contactReducer'
import vehicleReducer from './vehicleReducer'
import applicationReducer from './applicationReducer'
import historyReducer from './historyReducer'

const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
  contactReducer,
  vehicleReducer,
  applicationReducer,
  historyReducer
});

export default allReducers;
