import { dynGetCall, ajaxPatchCall } from '../../Utilities/dyanamicsAPI'
import { DYN_BASE_URL } from '../../Constants/config'
import { EDIT_HISTORY_FORM_VIEW, EDIT_HISTORY_REQUEST_PENDING, EDIT_HISTORY_REQUEST_SUCCESS, HISTORY_DESCRIPTION_FIELD_CHANGE, HISTORY_POINTS_FIELD_CHANGE, HISTORY_NUMBER_FIELD_CHANGE, HISTORY_TYPE_FIELD_CHANGE, HISTORY_CONTACT_FIELD_CHANGE, HISTORY_CONTACT_CHANGE } from '../../Constants/actionTypes'

export function openHistoryForm(historyId) {
    let historyData
    let contactData
    return dispatch => {
        dispatch(editPending())
        dynGetCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_drivinghistories(${historyId})?$select=_teamtwo_contacttodrivinghistoryid_value,teamtwo_driving_history_number,teamtwo_drivinghistorystate,teamtwo_incidenttype,teamtwo_points,teamtwo_totalconvictionpoints,teamtwo_totalconvictionpoints_date,teamtwo_totalconvictionpoints_state,teamtwo_drivinghistorydescription`)
            .then(response => {
                historyData = response.data
                if (response.data._teamtwo_contacttodrivinghistoryid_value)
                    return dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts(${response.data._teamtwo_contacttodrivinghistoryid_value})?$select=address1_addressid,address1_addresstypecode,fullname,address1_city,address1_country,firstname,lastname,teamtwo_age,teamtwo_city,teamtwo_contactnumber,teamtwo_dob,teamtwo_firstname,teamtwo_lastname,teamtwo_selectstate,teamtwo_ssn,teamtwo_state`);
                else {
                    return new Promise(res => res(null))
                }
            })
            .then(response => {
                contactData = response && response.data
                dispatch(editHistoryFormView(historyData, contactData))
            })

    }
}

export function editHistorySubmit(historyid, obj) {
    return dispatch => {
        dispatch(editPending())
        ajaxPatchCall(DYN_BASE_URL + `/api/data/v9.1/teamtwo_drivinghistories(${historyid})`, obj)
            .then(() => {
                dispatch(editSuccess())
            })
            .catch(err => console.log(err))
    }

}

export function editHistoryFormView(historyData, contactData) {
    return {
        type: EDIT_HISTORY_FORM_VIEW,
        contact: contactData,
        historyData: historyData
    }
}

export function editPending() {
    return {
        type: EDIT_HISTORY_REQUEST_PENDING,
    }
}

export function editSuccess() {
    return {
        type: EDIT_HISTORY_REQUEST_SUCCESS,
    }
}

//form actions

export function historyDescriptionFieldChange(value) {
    return dispatch => dispatch(historyDescriptionField(value))
}

export function historyPointsFieldChange(value) {
    return dispatch => dispatch(historyPointsField(value))
}

export function historyNumberFieldChange(value) {
    return dispatch => dispatch(historyNumberField(value))
}

export function historyIncidentTypeFieldChange(value) {
    return dispatch => dispatch(historyIncidentTypeField(value))
}

export function historyDescriptionField(value) {
    return {
        type: HISTORY_DESCRIPTION_FIELD_CHANGE,
        description: value
    }
}

export function historyPointsField(value) {
    return {
        type: HISTORY_POINTS_FIELD_CHANGE,
        historypoints: value
    }
}

export function historyNumberField(value) {
    return {
        type: HISTORY_NUMBER_FIELD_CHANGE,
        historynumber: value
    }
}

export function historyIncidentTypeField(value) {
    return {
        type: HISTORY_TYPE_FIELD_CHANGE,
        incidenttype: value
    }
}

export function historyContactField(value) {
    return {
        type: HISTORY_CONTACT_FIELD_CHANGE,
        contact: value
    }
}

//contact listing actions

export function historyContactSelection(value) {
    return dispatch => {
        dispatch(historyContactChange([], value))
        dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts?$select=fullname&$filter=contains(fullname, '${value}')`)
            .then(response => {
                dispatch(historyContactChange(response.data.value))
            })
    }
}

export function historyContactChange(contactsArray, value, id) {
    return {
        type: HISTORY_CONTACT_CHANGE,
        contacts: contactsArray,
        contact: value && value.fullname ? value : { fullname: value, contactid: id }
    }
}

export function historyContactChangeCommit(contact) {
    return dispatch => dispatch(historyContactChange([], contact, contact.contactid))
}
