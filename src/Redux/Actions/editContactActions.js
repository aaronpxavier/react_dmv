import { dynGetCall, ajaxPatchCall } from '../../Utilities/dyanamicsAPI'
import { DYN_BASE_URL } from '../../Constants/config'
import { EDIT_CONTACT_REQUEST_SUCCESS, EDIT_CONTACT_REQUEST_PENDING, EDIT_CONTACT_FORM_VIEW, FULLNAME_FIELD_CHANGE, EMAIL_FIELD_CHANGE, AGE_FIELD_CHANGE, CONTACT_NUMBER_FIELD_CHANGE, FIRST_NAME_FIELD_CHANGE, LAST_NAME_FIELD_CHANGE } from '../../Constants/actionTypes'

export function openContactForm(contactId) {
    let contactData
    return dispatch => {
        dispatch(editPending())
        dynGetCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts(${contactId})?$select=emailaddress1,fullname, firstname, lastname, teamtwo_age,teamtwo_contactnumber&$filter=fullname ne null and  emailaddress1 ne null&$count=true`)
            .then(response => {
                contactData = response && response.data
                dispatch(editContactFormView(contactData))
            })
    }
}

export function editContactSubmit(contactId, obj) {
    return dispatch => {
        dispatch(editPending())
        ajaxPatchCall(DYN_BASE_URL + `/api/data/v9.1/contacts(${contactId})`, obj)
            .then(() => {
                dispatch(editSuccess())
            })
            .catch(err => console.log(err))
    }

}

export function editPending() {
    return {
        type: EDIT_CONTACT_REQUEST_PENDING
    }
}

export function editSuccess() {
    return {
        type: EDIT_CONTACT_REQUEST_SUCCESS
    }
}

export function editContactFormView(contactData) {
    return {
        type: EDIT_CONTACT_FORM_VIEW,
        contact: contactData
    }

}

//form actions

export function fullnameFieldChange(value) {
    return dispatch => dispatch(fullnameField(value))
}

export function emailFieldChange(value) {
    return dispatch => dispatch(emailField(value))
}

export function ageFieldChange(value) {
    return dispatch => dispatch(ageField(value))
}

export function contactNumberFieldChange(value) {
    return dispatch => dispatch(contactNumberField(value))
}

export function firstnameFieldChange(value) {
    return dispatch => dispatch(firstnameField(value))
}

export function lastnameFieldChange(value) {
    return dispatch => dispatch(lastnameField(value))
}

export function fullnameField(value) {
    return {
        type: FULLNAME_FIELD_CHANGE,
        fullname: value
    }
}

export function emailField(value) {
    return {
        type: EMAIL_FIELD_CHANGE,
        email: value
    }
}

export function ageField(value) {
    return {
        type: AGE_FIELD_CHANGE,
        age: value
    }
}

export function contactNumberField(value) {
    return {
        type: CONTACT_NUMBER_FIELD_CHANGE,
        contactNumber: value
    }
}

export function firstnameField(value) {
    return {
        type: FIRST_NAME_FIELD_CHANGE,
        firstname: value
    }
}

export function lastnameField(value) {
    return {
        type: LAST_NAME_FIELD_CHANGE,
        lastname: value
    }
}
