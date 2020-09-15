import { GET_CONTACTS_SUCCESS, GET_CONTACTS_PENDING, CUSTOMER_MODAL_CHANGE, DELETE_CONTACT_POPUP_CHANGE } from '../../Constants/actionTypes'

export default function contactReducer(state = {}, action) {
    switch (action.type) {
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contactsData: {
                    contactArray: action.data.value,
                    requestSuccessful: true,
                },
            };
        case GET_CONTACTS_PENDING:
            return {
                ...state,
                contactsData: {
                    requestPending: true,
                },
            };
        case CUSTOMER_MODAL_CHANGE:
            return {
                contactsData: {
                    ...state.contactsData,
                    openCustomerPopup: action.open,
                    rowData: action.rowData
                }
            }
        case DELETE_CONTACT_POPUP_CHANGE:
            return {
                ...state,
                contactsData: {
                    ...state.contactsData,
                    openDeletePopup: action.open,
                    rowData: action.rowData
                }
            }
        default:
            return {
                ...state,
                contactsData: {
                    requestPending: true,
                },
            };
    }
}
