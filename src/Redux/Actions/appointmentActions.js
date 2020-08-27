import { dynGetCall } from "../../Utilities/dyanamicsAPI";
import { GET_APPOINTMENTS_PENDING, GET_APPOINTMENTS_SUCCESS, POST_APPOINTMENT,POST_APPOINTMENT_PENDING} from "../../Constants/actionTypes";

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

export function postAppointments(data){
  return (dispatch) => {
    dispatch(_postAppointmentPending())
    return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/appointments")
      .then((response) => {
        dispatch(_postAppointmentSuccess(response.data));
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

export function _postAppointmentSuccess(dat) {
  return {
    type: POST_APPOINTMENT,
    data: dat,
  };
}

export function openAppointmentModal() {
  return (dispatch) => dispatch(openAppointmentModalDispatch(true))
}

export function closeAppointmentModal() {
  return (dispatch) => dispatch(openAppointmentModalDispatch(false))
}

export function openAppointmentModalDispatch(open) {
  return {
      type: "APPOINTMENT_MODAL_CHANGE",
      open: open
      
  }
}
export function postAppointment(){
  return(dispatch) => dispatch(_appointmentPending())
}
export function _appointmentPending() {
  return {
    type: GET_APPOINTMENTS_PENDING,
  };
}
export function _postAppointmentPending() {
  return {
    type: POST_APPOINTMENT_PENDING,
  };
}