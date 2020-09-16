import { dynGetCall } from '../../Utilities/dyanamicsAPI'
import { DYN_BASE_URL } from '../../Constants/config'

//post functionality


export function postVehicleSubmit(data) {
    return (dispatch) => {
        dispatch(postVehiclePending())
        return dynPostCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicles", data)
            .then((response) => {
                dispatch(postVehicleSuccess(response.data))
            })
    }
}

export function postVehicle() {
    return (dispatch) => dispatch(getRequestVehiclesPending())
}

export function openCreateVehicleForm() {
    return (dispatch) => dispatch(openCreateVehicleFormView())
}

export function openCreateVehicleFormView() {
    return {
        type: 'POST_VEHICLE_FORM_VIEW'
    }
}

export function postVehicleSuccess(data) {
    return {
        type: 'POST_VEHICLE_SUCCESS',
        data: data
    }
}

export function postVehiclePending() {
    return {
        type: 'POST_VEHICLE_PENDING'
    }
}

//form field actions

export function postContactFieldChange(value) {
    return dispatch => dispatch(postContactField(value))
}

export function postMakeFieldChange(value) {
    return dispatch => dispatch(postMakeField(value))
}

export function postModelFieldChange(value) {
    return dispatch => dispatch(postModelField(value))
}

export function postVinFieldChange(value) {
    return dispatch => dispatch(postVinField(value))
}

export function postYearFieldChange(value) {
    return dispatch => dispatch(postYearField(value))
}

export function postContactField(value) {
    return {
        type: 'POST_CONTACT_FIELD_CHANGE',
        contact: value
    }
}

export function postMakeField(value) {
    return {
        type: 'POST_MAKE_FIELD_CHANGE',
        make: value
    }
}

export function postModelField(value) {
    return {
        type: 'POST_MODEL_FIELD_CHANGE',
        model: value
    }
}

export function postVinField(value) {
    return {
        type: 'POST_VIN_FIELD_CHANGE',
        vin: value
    }
}

export function postYearField(value) {
    return {
        type: 'POST_YEAR_FIELD_CHANGE',
        year: value
    }
}

//contact listing actions
export function postContactSelection(value) {
    return dispatch => {
        dispatch(postContactChange([].value))
        dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts?$select=fullname&$filter=contains(fullname, '${value}')`)
            .then(response => {
                dispatch(contactChange(response.data.value))
            })
    }
}

export function postContactChange(contactsArray, value, id) {
    return {
        type: 'POST_VEHICLE_CONTACT_CHANGE',
        contacts: contactsArray,
        contact: value && value.fullname ? value : { fullname: value, contactid: id }
    }
}

export function postVehicleContactChangeCommit(contact) {
    return dispatch => dispatch(postContactChange([], contact, contact.contactid))
}