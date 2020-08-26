import { dynGetCall } from "../../Utilities/dyanamicsAPI";
import { GET_APPOINTMENTS_PENDING, GET_APPOINTMENTS_SUCCESS, POST_APPOINTMENT} from "../../Constants/actionTypes";

export function getAppointments() {
  return (dispatch) => {
    dispatch(_appointmentPending())
    return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/appointments?$select=scheduledend,scheduledstart,subject,teamtwo_appointmentnumber,_teamtwo_contactappointmentlookupid_value")
      .then((response) => {
        dispatch(_getAppointmentSuccess(response.data));
        //console.log(response.data)
      });
  };
}

export function _getAppointmentSuccess(dat) {
  return {
    type: GET_APPOINTMENTS_SUCCESS,
    data: dat,
  };
}

export function _appointmentPending() {
  return {
    type: GET_APPOINTMENTS_PENDING,
  };
}
