import { dynGetCall, dynDeleteCall } from "../../Utilities/dyanamicsAPI";
import { APPLICATION_REQUEST_PENDING, APPLICATION_REQUEST_SUCCESS, DELETE_POPUP_CHANGE} from "../../Constants/actionTypes";

// Actions
const URL = 'https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore'
export function getApplications() {
  return (dispatch) => {
    dispatch(_applicationPending())
    return dynGetCall(URL)
      .then((response) => {
        console.log(response);
        dispatch(_applicationSuccess(response.data));
      });
  };
}

export function deleteApplications(guid, appArray) {
  return (dispatch) => {
    dispatch(_changeDeletePopup(false));
    dispatch(_applicationPending);
    return dynDeleteCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications(${guid})`)
    .then(() => dynGetCall(URL))
    .then(response => dispatch(_applicationSuccess(response.data)));
  }
}

export function openDeletePopup(rowData) {
  return (dispatch) => dispatch(_changeDeletePopup(true, rowData));
}

export function closeDeletePopup() {
  return (dispatch) => dispatch(_changeDeletePopup(false));
}

export function updateApplication() {
  return dispatch => dispatch(_applicationPending)
}

//Dispatchers

export function _applicationPending() {
  return {
    type: APPLICATION_REQUEST_PENDING
  };
}

export function _applicationSuccess(array) {
  return {
    type: APPLICATION_REQUEST_SUCCESS,
    data: array
  };
}

export function _changeDeletePopup(open, rowDataIn) {
  return {
    type: DELETE_POPUP_CHANGE,
    open: open,
    rowData: rowDataIn
  };
}



