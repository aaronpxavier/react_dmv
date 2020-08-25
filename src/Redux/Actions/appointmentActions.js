import { dynGetCall } from "../../Utilities/dyanamicsAPI";
import { GET_APPOINTMENTS_PENDING, GET_APPOINTMENTS_SUCCESS, POST_APPOINTMENT} from "../../Constants/actionTypes";

export function getAppointments() {
  return (dispatch) => {
    dispatch(_appointmentPending())
    return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore")
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
