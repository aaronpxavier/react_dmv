//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from "./contactReducer";
import vehicleReducer from "./vehicleReducer";
import applicationReducer from "./applicationReducer";
import themeReducer from "./themeReducer";

const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
  contactReducer,
  vehicleReducer,
  applicationReducer,
  themeReducer,
});

export default allReducers;
