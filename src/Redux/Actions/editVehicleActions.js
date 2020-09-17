import { dynGetCall, dynPostCall, ajaxPatchCall } from '../../Utilities/dyanamicsAPI'
import { DYN_BASE_URL } from '../../Constants/config'
import { EDIT_VEHICLE_FORM_VIEW, EDIT_VEHICLE_REQUEST_PENDING, EDIT_VEHICLE_REQUEST_SUCCESS, CONTACT_FIELD_CHANGE, MAKE_FIELD_CHANGE, MODEL_FIELD_CHANGE, VIN_FIELD_CHANGE, YEAR_FIELD_CHANGE, VEHICLE_CONTACT_CHANGE, CREATE_VEHICLE_FORM_VIEW } from '../../Constants/actionTypes'

export function openVehicleForm(vehicleId) {
    let vehicleData
    let contactData
    let dynUsers
    return dispatch => {
        dispatch(editPending())
        dynGetCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicles(${vehicleId})?$select=_ownerid_value,_teamtwo_contactlookupid_value,teamtwo_make,teamtwo_model,teamtwo_vin,teamtwo_year&$count=true`)
            .then(response => {
                vehicleData = response.data
                if (response.data._teamtwo_contactlookupid_value)
                    return dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts(${response.data._teamtwo_contactlookupid_value})?$select=address1_addressid,address1_addresstypecode,fullname,address1_city,address1_country,firstname,lastname,teamtwo_age,teamtwo_city,teamtwo_contactnumber,teamtwo_dob,teamtwo_firstname,teamtwo_lastname,teamtwo_selectstate,teamtwo_ssn,teamtwo_state`);
                else {
                    return new Promise(res => res(null))
                }
            })
            .then(response => {
                contactData = response && response.data
                return dynGetCall(DYN_BASE_URL + "/api/data/v9.1/systemusers?$select=fullname&$orderby=fullname asc")


            })
            .then(response => {
                dynUsers = response.data
                dispatch(editVehicleFormView(vehicleData, contactData, dynUsers))
            })
    }
}


export function editVehicleSubmit(vehicleid, obj) {
    return dispatch => {
        dispatch(editPending())
        ajaxPatchCall(DYN_BASE_URL + `/api/data/v9.1/teamtwo_vehicles(${vehicleid})`, obj)
            .then(() => {
                dispatch(editSuccess())
            })
            .catch(err => console.log(err))
    }
}

export function editVehicleFormView(vehicleData, contactData, user) {
    return {
        type: EDIT_VEHICLE_FORM_VIEW,
        contact: contactData,
        vehicleData: vehicleData,
        userData: user
    }
}

//create vehicle functionality

export function createVehicleSubmit(data) {
    return (dispatch) => {
        dispatch(editPending())
        return dynPostCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicles", data)
            .then((response) => {
                dispatch(editSuccess(response.data))
            })
    }
}

export function openCreateVehicleForm() {
    return dispatch => {
        dispatch(createVehicleFormView())
    }
}

export function createVehicleFormView() {
    return {
        type: CREATE_VEHICLE_FORM_VIEW
    }
}

export function editPending() {
    return {
        type: EDIT_VEHICLE_REQUEST_PENDING
    }
}

export function editSuccess() {
    return {
        type: EDIT_VEHICLE_REQUEST_SUCCESS
    }
}

//form field actions

export function contactFieldChange(value) {
    return dispatch => dispatch(contactField(value))
}

export function makeFieldChange(value) {
    return dispatch => dispatch(makeField(value))
}

export function modelFieldChange(value) {
    return dispatch => dispatch(modelField(value))
}

export function vinFieldChange(value) {
    return dispatch => dispatch(vinField(value))
}

export function yearFieldChange(value) {
    return dispatch => dispatch(yearField(value))
}

export function contactField(value) {
    return {
        type: CONTACT_FIELD_CHANGE,
        contact: value
    }
}

export function makeField(value) {
    return {
        type: MAKE_FIELD_CHANGE,
        make: value
    }
}

export function modelField(value) {
    return {
        type: MODEL_FIELD_CHANGE,
        model: value
    }
}

export function vinField(value) {
    return {
        type: VIN_FIELD_CHANGE,
        vin: value
    }
}

export function yearField(value) {
    return {
        type: YEAR_FIELD_CHANGE,
        year: value
    }
}

//contact listing actions

export function contactSelection(value) {
    return dispatch => {
        dispatch(contactChange([], value))
        dynGetCall(`${DYN_BASE_URL}/api/data/v9.1/contacts?$select=fullname&$filter=contains(fullname, '${value}')`)
            .then(response => {
                dispatch(contactChange(response.data.value))
            })
    }
}

export function contactChange(contactsArray, value, id) {
    return {
        type: VEHICLE_CONTACT_CHANGE,
        contacts: contactsArray,
        contact: value && value.fullname ? value : { fullname: value, contactid: id }
    }
}

export function vehicleContactChangeCommit(contact) {
    return dispatch => dispatch(contactChange([], contact, contact.contactid))
}
