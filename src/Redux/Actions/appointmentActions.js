import {
  dynGetCall,
  dynPostCall,
  dynDeleteCall,
} from "../../Utilities/dyanamicsAPI";
import {
  GET_CONTACTS_ID_PENDING,
  GET_APPOINTMENTS_PENDING,
  GET_APPOINTMENTS_SUCCESS,
  POST_APPOINTMENT,
  POST_APPOINTMENT_PENDING,
  GET_CONTACT_ID_NAME,
} from "../../Constants/actionTypes";
import { DYN_BASE_URL } from "../../Constants/config";

const URL_PARAMS =
  "/api/data/v9.1/appointments?$select=_regardingobjectid_value,scheduledend,scheduledstart,subject,teamtwo_appointmentnumber,_teamtwo_contactappointmentlookupid_value";

//This is an action creator, it's going to return the action type and payload
export function getAppointments() {
  return (dispatch) => {
    //This is a function being returned that takes dispatch method as argument, redux thunk makes this possible
    dispatch(_appointmentPending());
    return dynGetCall(
      "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/appointments?$select=_regardingobjectid_value,scheduledend,scheduledstart,subject,activityid,teamtwo_appointmentnumber,_teamtwo_contactappointmentlookupid_value"
    ).then((response) => {
      dispatch(_getAppointmentSuccess(response.data));
      console.log("Goodie ", response.data);
    });
  };
}

export function postAppointments(postdata) {
  return (dispatch) => {
    dispatch(_postAppointmentPending());
    return dynPostCall(
      "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/appointments",
      postdata
    ).then((response) => {
      dispatch(_postAppointmentSuccess(response.data));
      console.log("Post Appointments", response.data);
    });
  };
}

export function getAppointmentsContactId() {
  return (dispatch) => {
    //This is a function being returned that takes dispatch method as argument, redux thunk makes this possible
    dispatch(_getContactPending());
    return dynGetCall(
      "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts?$select=fullname"
    ).then((response) => {
      dispatch(_getContactSuccess(response.data));
    });
  };
}

export function deleteAppointments(guid) {
  return (dispatch) => {
    dispatch(_appointmentPending());
    return dynDeleteCall(`${DYN_BASE_URL}/api/data/v9.1/appointments(${guid})`)
      .then(() => dynGetCall(DYN_BASE_URL + URL_PARAMS))
      .then((response) => dispatch(_getAppointmentSuccess(response.data)));
  };
}

export function _getContactPending() {
  return {
    type: GET_CONTACTS_ID_PENDING,
  };
}
export function _getAppointmentSuccess(dat) {
  return {
    type: GET_APPOINTMENTS_SUCCESS,
    data: dat,
  };
}

export function _getContactSuccess(dat) {
  return {
    type: GET_CONTACT_ID_NAME,
    payload: dat,
  };
}

export function _postAppointmentSuccess(post) {
  return {
    type: POST_APPOINTMENT,
    payload: post,
  };
}


export function postAppointment() {
  return (dispatch) => dispatch(_appointmentPending());
}
export function openAppointmentModalDispatch(open) {
  return {
    type: "APPOINTMENT_MODAL_CHANGE",
    open: open,
  };
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
