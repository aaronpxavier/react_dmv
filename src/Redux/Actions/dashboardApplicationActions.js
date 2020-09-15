import { dynGetCall } from "../../Utilities/dyanamicsAPI";
import {
  GET_DASH_APPLICATIONS_SUCCESS,
  GET_DASH_APPLICATIONS_PENDING,
  GET_DASH_APPLICATIONS_FAILED,
} from "../../Constants/actionTypes";

export function getApplicationsDashboard() {
  return (dispatch) => {
    dispatch(_getApplicationPending());
    return dynGetCall(
      "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore"
    )
      .then((response) => {
        dispatch(_getApplicationSuccess(response.data));
      })
      .catch((error) => {
        console.log("failed to load");
        dispatch(_getApplicationFailed(error));
      });
  };
}

export function _getApplicationSuccess(data) {
  return {
    type: GET_DASH_APPLICATIONS_SUCCESS,
    data: data,
  };
}

export function _getApplicationPending() {
  return {
    type: GET_DASH_APPLICATIONS_PENDING,
  };
}

export function _getApplicationFailed(error) {
  return {
    type: GET_DASH_APPLICATIONS_FAILED,
    error,
  };
}
