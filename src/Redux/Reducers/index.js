//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from "./contactReducer";
import vehicleReducer from "./vehicleReducer";
import applicationReducer from "./applicationReducer";
import themeReducer from "./themeReducer";
import editApplicationReducer from "./editApplicationReducer";
import historyReducer from "./historyReducer";
import dashboardContactReducer from "./dashboardContactReducer";
import dashboardApplicationReducer from "./dashboardApplicationReducer";
import appointmentReducer from "./appointmentReducer";
import editContactReducer from './editContactReducer';
import editHistoryReducer from './editHistoryReducer';
import editVehiclesReducer from './editVehicleReducer'

const allReducers = combineReducers({
  //reducers go here as key value pairs
  authReducer,
  contactReducer,
  vehicleReducer,
  applicationReducer,
  appointmentReducer,
  themeReducer,
  editApplicationReducer,
  historyReducer,
  dashboardApplicationReducer,
  dashboardContactReducer,
  editContactReducer,
  editHistoryReducer,
  editVehiclesReducer,


});

export default allReducers;
