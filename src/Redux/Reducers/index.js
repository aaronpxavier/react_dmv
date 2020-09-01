//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";

import contactReducer from "./contactReducer";
import vehicleReducer from "./vehicleReducer";
import applicationReducer from "./applicationReducer";
import themeReducer from "./themeReducer";
import editApplicationReducer from './editApplicationReducer';
import historyReducer from './historyReducer';


const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
  contactReducer,
  vehicleReducer,
  applicationReducer,
  themeReducer,
  editApplicationReducer,
  historyReducer

});

export default allReducers;
