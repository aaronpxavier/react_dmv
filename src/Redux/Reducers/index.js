//import all reducers here

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from './contactReducer'
import vehicleReducer from './vehicleReducer'
import applicationReducer from './applicationReducer'
import appointmentReducer from './appointmentReducer'




import themeReducer from "./themeReducer";
import editApplicationReducer from './editApplicationReducer';
import historyReducer from './historyReducer';
import editVehiclesReducer from './editVehicleReducer'
import editContactReducer from './editContactReducer'
import editHistoryReducer from './editHistoryReducer'

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
  editVehiclesReducer,
  editContactReducer,
  editHistoryReducer

});

export default allReducers;
