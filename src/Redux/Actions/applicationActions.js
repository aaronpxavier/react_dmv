import { dynGetCall } from "../../Utilities/dyanamicsAPI";
import { GET_APPLICATIONS_PENDING, GET_APPLICATIONS_SUCCESS, DELETE_POPUP_CHANGE, DELETE_APPLICATION_SUCCESS} from "../../Constants/actionTypes";

export function getApplications() {
  return (dispatch) => {
    dispatch(_applicationPending())
    return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore")
      .then((response) => {
        dispatch(_getApplicationSuccess(response.data));
      });
  };
}

export function deleteApplications(guid) {
  return (dispatch) => {

    dispatch(_applicationPending())
  }
}

export function openDeletePopup(rowData) {
  return (dispatch) => dispatch(_openDeletePopupDispatch(true), rowData);
}

export function closeDeletePopup() {
  return (dispatch) => dispatch(_openDeletePopupDispatch(false));
}

export function _openDeletePopupDispatch(open, rowData) {
  return {
    type: DELETE_POPUP_CHANGE,
    open: open,
    rowData: rowData
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
