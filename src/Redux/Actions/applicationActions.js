import { dynGetCall, dynDeleteCall, ajaxPatchCall } from "../../Utilities/dyanamicsAPI";
import { DATE_FIELD_CHANGED, DESCRIPTION_FIELD_CHANGED, APPROVED_STATUS_CHANGED, CONTACT_CHANGE, APPLICATION_REQUEST_PENDING, TYPE_CHANGE, APPLICATION_REQUEST_SUCCESS, DELETE_POPUP_CHANGE, EDIT_FORM_VIEW, OWNER_CHANGE} from "../../Constants/actionTypes";
import {DYN_BASE_URL} from '../../Constants/config'

// Actions

const URL_PARAMS = '/api/data/v9.1/teamtwo_applications?$select=_createdby_value,createdon,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_name,teamtwo_proofofaddress,teamtwo_submitdate,teamtwo_visionscore'
export function getApplications() {
  return (dispatch) => {
    dispatch(_applicationPending())
    return dynGetCall(DYN_BASE_URL + URL_PARAMS)
      .then((response) => {
        dispatch(_applicationSuccess(response.data));
      });
  };
}

export function deleteApplications(guid, appArray) {
  return (dispatch) => {
    dispatch(_changeDeletePopup(false));
    dispatch(_applicationPending);
    return dynDeleteCall(`${DYN_BASE_URL}/api/data/v9.1/teamtwo_applications(${guid})`)
    .then(() => dynGetCall(DYN_BASE_URL + URL_PARAMS))
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

export function openEditForm(rowData) {
  let applicationData;
  let contactData;
  let dynUsers;
  return dispatch => {
    dispatch(_applicationPending());
    dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/teamtwo_applications(${rowData.id})?$select=_ownerid_value,_createdby_value,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_moveattachments,teamtwo_name,teamtwo_proofofaddress,teamtwo_qrscan,teamtwo_submitdate,teamtwo_visionscore`)
    .then(response => {
      applicationData = response.data;
      if (response.data._teamtwo_contacttoapplicationid_value)
        return dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts(${response.data._teamtwo_contacttoapplicationid_value})?$select=address1_addressid,address1_addresstypecode,fullname,address1_city,address1_country,firstname,lastname,teamtwo_age,teamtwo_city,teamtwo_contactnumber,teamtwo_dob,teamtwo_firstname,teamtwo_lastname,teamtwo_selectstate,teamtwo_ssn,teamtwo_state`);
      else {
        return new Promise(res => res(null))
      }
    })
    .then(response => {
      contactData = response.data;
      return dynGetCall(DYN_BASE_URL + "/api/data/v9.1/systemusers?$select=fullname&$orderby=fullname asc")
      
    })
    .then(response => {
      dynUsers = response.data;
      dispatch(_showEditFormView(applicationData, contactData, dynUsers));
    })
  }
}

export function applicationOnwerChange(user) {
  return dispatch => dispatch(_appOwnerChange(user.systemuserid))
}

export function applicationTypeChange(type) {
  return dispatch => dispatch(_appTypeChange(type))
}

export function applicationContactFieldKeyup(value) {
  return dispatch => {
    dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts?$select=fullname&$filter=contains(fullname, '${value}')`)
    .then(response => {
      dispatch(_appContactChange(response.data.value, value))
    })
  }
}

export function applicationContactChangeCommit(contact) {
  return dispatch => dispatch(_appContactChange([], contact, contact.contactid));
}

export function approvedStatusChanged(status) {
  console.log(status);
  return dispatch => dispatch(_approvedStatus(status));
}

export function descriptionFieldChanged(value) {
  return dispatch => dispatch(_discriptionField(value));
}

export function dateFieldChanged(value) {
  return dispatch => dispatch(_dateField(value));
}

export function editApplicaitonSubmit(appid, obj) {
  console.log(appid);
  console.log(obj);
  return dispatch => {
    dispatch(_applicationPending())
    ajaxPatchCall(DYN_BASE_URL + `/api/data/v9.1/teamtwo_applications(${appid})`, obj)
    .then(response => {
      console.log(response);
      return dynGetCall(DYN_BASE_URL + URL_PARAMS)
    })
    .then((response) => {
      dispatch(_applicationSuccess(response.data));
    })
    .catch(err => console.error(err));
  }
}
//Dispatchers

export function _dateField(date) {
  return {
    type: DATE_FIELD_CHANGED,
    date: date
  }
}
export function _discriptionField(value) {
  return { 
    type: DESCRIPTION_FIELD_CHANGED,
    desc: value
  }
}
export function _approvedStatus(status) {
  return {
    type: APPROVED_STATUS_CHANGED,
    status: status
  }
}
export function _appOwnerChange(userId) {
  return {
    type: OWNER_CHANGE,
    user: userId
  }
}

export function _appTypeChange(type) {
  return {
    type: TYPE_CHANGE,
    data: type
  }
}

export function _appContactChange(contactsArry, value, id) {
  console.log(contactsArry)
  return {
    type: CONTACT_CHANGE,
    contacts: contactsArry,
    contact: value.fullname ? value : {fullname: value, contactid: id}
  }
}

export function _showEditFormView(applicationData, contactData, user) {
  return {
    type: EDIT_FORM_VIEW,
    contact: contactData,
    applicationData: applicationData,
    userData: user
  }
}

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



