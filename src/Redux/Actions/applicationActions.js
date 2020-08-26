import { dynGetCall, dynDeleteCall } from "../../Utilities/dyanamicsAPI";
import { GET_APPLICATIONS_PENDING, GET_APPLICATIONS_SUCCESS, DELETE_POPUP_CHANGE, DELETE_APPLICATION_SUCCESS, DELETE_APPLICATION_PENDING} from "../../Constants/actionTypes";

const URL = 'https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore'
export function getApplications() {
  return (dispatch) => {
    dispatch(_applicationPending())
    return dynGetCall(URL)
      .then((response) => {
        dispatch(_getApplicationSuccess(response.data));
      });
  };
}

export function deleteApplications(guid, appArray) {
  return (dispatch) => {
    dispatch(_changeDeletePopup(false));
    dispatch(_deleteApplicationPending);
    return dynDeleteCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications(${guid})`)
    .then(() => dynGetCall(URL))
    .then(response => dispatch(_deleteApplicationSuccess(response.data)));
  }
}

//DMV-00074-S2M6H
export function openDeletePopup(rowData) {
  return (dispatch) => dispatch(_changeDeletePopup(true, rowData));
}

export function closeDeletePopup() {
  return (dispatch) => dispatch(_changeDeletePopup(false));
}

export function _deleteApplicationPending() {
  return {
    type: DELETE_APPLICATION_PENDING
  };
}

export function _deleteApplicationSuccess(array) {
  return {
    type: DELETE_APPLICATION_SUCCESS,
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

export function _getApplicationSuccess(dat) {
  return {
    type: GET_APPLICATIONS_SUCCESS,
    data: dat,
  };
}

export function _applicationPending() {
  return {
    type: GET_APPLICATIONS_PENDING,
  };
}
