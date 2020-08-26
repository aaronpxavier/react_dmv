import { dynGetCall } from '../../Utilities/dyanamicsAPI';
import { GET_CONTACTS_SUCCESS, GET_CONTACTS_PENDING } from '../../Constants/actionTypes'

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
        type: "CUSTOMER_MODAL_CHANGE",
        open: open,
        rowData: rowData
    }
}