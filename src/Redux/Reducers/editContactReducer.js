import { EDIT_CONTACT_REQUEST_SUCCESS, EDIT_CONTACT_REQUEST_PENDING, EDIT_CONTACT_FORM_VIEW, FULLNAME_FIELD_CHANGE, EMAIL_FIELD_CHANGE, AGE_FIELD_CHANGE, CONTACT_NUMBER_FIELD_CHANGE, FIRST_NAME_FIELD_CHANGE, LAST_NAME_FIELD_CHANGE } from '../../Constants/actionTypes'

export default function editContactReducer(state = {}, action) {
    switch (action.type) {
        case EDIT_CONTACT_REQUEST_SUCCESS:
            return {
                ...state,
                contactData: {
                    requestSuccessful: true
                }
            }
        case EDIT_CONTACT_REQUEST_PENDING:
            return {
                ...state,
                contactData: {
                    requestPending: true
                }
            }
        case EDIT_CONTACT_FORM_VIEW:
            return {
                ...state,
                contactData: {
                    editContact: true,
                    contact: action.contact,
                    fullname: action.fullname,
                    firstname: action.firstname,
                    lastname: action.lastname,
                    email: action.email,
                    age: action.age,
                    contactNumber: action.contactNumber
                }
            }
        case FULLNAME_FIELD_CHANGE:
            return {
                ...state,
                contactData: {
                    ...state.contactData,
                    fullname: action.fullname
                }
            }
        case EMAIL_FIELD_CHANGE:
            return {
                ...state,
                contactData: {
                    ...state.contactData,
                    email: action.email
                }
            }
        case AGE_FIELD_CHANGE:
            return {
                ...state,
                contactData: {
                    ...state.contactData,
                    age: action.age
                }
            }
        case CONTACT_NUMBER_FIELD_CHANGE:
            return {
                ...state,
                contactData: {
                    ...state.contactData,
                    contactNumber: action.contactNumber
                }
            }
        case FIRST_NAME_FIELD_CHANGE:
            return {
                ...state,
                contactData: {
                    ...state.contactData,
                    firstname: action.firstname
                }
            }
        case LAST_NAME_FIELD_CHANGE:
            return {
                ...state,
                contactData: {
                    ...state.contactData,
                    lastname: action.lastname
                }
            }
        default:
            return {
                ...state,
                contactData: {
                    requestPending: true
                }
            }
    }
}
