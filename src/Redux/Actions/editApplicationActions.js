import { dynGetCall, ajaxPatchCall, ajaxPostCall } from "../../Utilities/dyanamicsAPI";
import {DYN_BASE_URL} from '../../Constants/config'
import { 
    EDIT_APPLICATION_REQUEST_PENDING, 
    EDIT_APPLICATION_REQUEST_SUCCESS, 
    DATE_FIELD_CHANGED, 
    DESCRIPTION_FIELD_CHANGED, 
    APPROVED_STATUS_CHANGED, 
    CONTACT_CHANGE, 
    TYPE_CHANGE, 
    EDIT_FORM_VIEW, 
    OWNER_CHANGE
} from "../../Constants/actionTypes";

export function openEditForm(appId) {
    let applicationData;
    let contactData;
    let dynUsers;
    return dispatch => {
      dispatch(_editPending());
      dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/teamtwo_applications(${appId})?$select=_ownerid_value,_createdby_value,teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationid,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value,teamtwo_identificationpoints,teamtwo_moveattachments,teamtwo_name,teamtwo_proofofaddress,teamtwo_qrscan,teamtwo_submitdate,teamtwo_visionscore`)
      .then(response => {
        applicationData = response.data;
        if (response.data._teamtwo_contacttoapplicationid_value)
          return dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts(${response.data._teamtwo_contacttoapplicationid_value})?$select=address1_addressid,address1_addresstypecode,fullname,address1_city,address1_country,firstname,lastname,teamtwo_age,teamtwo_city,teamtwo_contactnumber,teamtwo_dob,teamtwo_firstname,teamtwo_lastname,teamtwo_selectstate,teamtwo_ssn,teamtwo_state`);
        else {
          return new Promise(res => res(null))
        }
      })
      .then(response => {
        contactData = response && response.data;
        return dynGetCall(DYN_BASE_URL + "/api/data/v9.1/systemusers?$select=fullname&$orderby=fullname asc")
        
      })
      .then(response => {
        dynUsers = response.data;
        dispatch(_showEditFormView(applicationData, contactData, dynUsers));
      })
    }
  }

  export function openAddAppForm() { 
    return dispatch => {
      dynGetCall(DYN_BASE_URL + "/api/data/v9.1/systemusers?$select=fullname&$orderby=fullname asc")
      .then(response => {
        dispatch(_showEditFormView(null, null, response.data));
      })
    }
  }

  export function editApplicaitonSubmit(appid, obj) {
    console.log(appid);
    console.log(obj);
    return dispatch => {
      dispatch(_editPending())
      ajaxPatchCall(DYN_BASE_URL + `/api/data/v9.1/teamtwo_applications(${appid})`, obj)
      .then(() => {
        dispatch(_editSuccess());
      })
      .catch(err => console.error(err));
    }
  }

  export function applicationOnwerChange(user) {
    return dispatch => dispatch(_appOwnerChange(user.systemuserid))
  }
  
  export function applicationTypeChange(type) {
    return dispatch => dispatch(_appTypeChange(type))
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

  export function postApplication(entity) {
    console.log(entity);
    return dispatch => {
      dispatch(_editPending())
      ajaxPostCall(DYN_BASE_URL + "/api/data/v9.0/teamtwo_applications", entity)
      .then(response => dispatch(_editSuccess()));
    }
  }

  export function applicationContactChangeCommit(contact) {
    return dispatch => dispatch(_appContactChange([], contact, contact.contactid));
  }

  export function applicationContactFieldKeyup(value) {
    let apiQueryString = '';
    apiQueryString = value ? `/api/data/v9.1/contacts?$select=fullname&$filter=contains(fullname, '${value}')` : '/api/data/v9.1/contacts?$select=fullname&$count=true'
    return dispatch => {
      dispatch(_appContactChange([], value))
      dynGetCall(DYN_BASE_URL + apiQueryString, 25)
      .then(response => {
        dispatch(_appContactChange(response.data.value))
      })
    }
  }
    //dispatchers

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
    return {
      type: CONTACT_CHANGE,
      contacts: contactsArry,
      contact: value && value.fullname ? value : {fullname: value, contactid: id}
    }
  }
  
  export function _showEditFormView(applicationData, contactData, user) {
    return {
      type: EDIT_FORM_VIEW,
      contact: contactData,
      applicationData: applicationData,
      userData: user,
      isPost: applicationData ? false : true
    }
  }

  export function _editPending() {
    return {
      type: EDIT_APPLICATION_REQUEST_PENDING
    };
  }

  export function _editSuccess() {
    return {
        type: EDIT_APPLICATION_REQUEST_SUCCESS
    };
  }
