import { dynGetCall, dynDeleteCall } from '../../Utilities/dyanamicsAPI';
import { GET_CONTACTS_SUCCESS, GET_CONTACTS_PENDING, CUSTOMER_MODAL_CHANGE, DELETE_CONTACT_POPUP_CHANGE } from '../../Constants/actionTypes'

export function getContacts() {
    return (dispatch) => {
        dispatch(getRequestContactsPending())
        return dynGetCall("https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts?$select=emailaddress1,fullname,teamtwo_age,teamtwo_contactnumber&$filter=fullname ne null and  emailaddress1 ne null&$count=true")
            .then((response) => {
                dispatch(getRequestContacts(response.data))
            })
    }
}

export function getRequestContacts(data) {
    return {
        type: GET_CONTACTS_SUCCESS,
        data: data
    }
}

export function getRequestContactsPending() {
    return {
        type: GET_CONTACTS_PENDING,
    }
}

export function openCustomerModal(rowData) {
    return (dispatch) => dispatch(openCustomerModalDispatch(true, rowData))
}

export function closeCustomerModal() {
    return (dispatch) => dispatch(openCustomerModalDispatch(false))
}

export function openCustomerModalDispatch(open, rowData) {
    return {
        type: CUSTOMER_MODAL_CHANGE,
        open: open,
        rowData: rowData
    }
}

//delete functionality

export function deleteContact(guid) {
    return dispatch => {
        dispatch(changeContactDeletePopup(false))
        dispatch(getRequestContactsPending())
        return dynDeleteCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts(${guid})`)
            .then(() => dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts?$select=emailaddress1,fullname,teamtwo_age,teamtwo_contactnumber&$filter=fullname ne null and  emailaddress1 ne null&$count=true'))
            .then(response => dispatch(getRequestContacts(response.data)))
    }
}

export function changeContactDeletePopup(open, rowData) {
    return {
        type: DELETE_CONTACT_POPUP_CHANGE,
        open: open,
        rowData: rowData
    }
}

export function openContactDeletePopup(rowData) {
    return dispatch => dispatch(changeContactDeletePopup(true, rowData))
}

export function closeContactDeletePopup(rowData) {
    return dispatch => dispatch(changeContactDeletePopup(false, rowData))
}
