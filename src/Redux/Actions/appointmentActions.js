import { dynGetCall,dynPostCall } from "../../Utilities/dyanamicsAPI";
import { GET_APPOINTMENTS_PENDING, GET_APPOINTMENTS_SUCCESS, POST_APPOINTMENT,POST_APPOINTMENT_PENDING} from "../../Constants/actionTypes";

//This is an action creator, it's going to return the action type and payload
export function getAppointments() {
  return (dispatch) => {    //This is a function being returned that takes dispatch method as argument, redux thunk makes this possible
    dispatch(_appointmentPending())
    return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/appointments?$select=scheduledend,scheduledstart,subject,teamtwo_appointmentnumber,_teamtwo_contactappointmentlookupid_value")
      .then((response) => {
        dispatch(_getAppointmentSuccess(response.data));
        //console.log(response.data)
      });
  };
}

export function postAppointments(postdata){
  return (dispatch) => {
    dispatch(_postAppointmentPending())
    return dynPostCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/appointments",postdata)
      .then((response) => {
        dispatch(_postAppointmentSuccess(response.data));
        console.log("Post Appointments",response.data)
      });
  };

}


export function _getAppointmentSuccess(dat) {
  return {
    type: GET_APPOINTMENTS_SUCCESS,
    data: dat,
  };
}

export function _postAppointmentSuccess(post) {
  return {
    type: POST_APPOINTMENT,
    payload: post,
  };
}

export function openAppointmentModal() {
  return (dispatch) => dispatch(openAppointmentModalDispatch(true))
}

export function closeAppointmentModal() {
  return (dispatch) => dispatch(openAppointmentModalDispatch(false))
}
export function postAppointment(){
  return(dispatch) => dispatch(_appointmentPending())
}
export function openAppointmentModalDispatch(open) {
  return {
      type: "APPOINTMENT_MODAL_CHANGE",
      open: open
      
  }
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