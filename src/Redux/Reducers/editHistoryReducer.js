import { EDIT_HISTORY_FORM_VIEW, EDIT_HISTORY_REQUEST_PENDING, EDIT_HISTORY_REQUEST_SUCCESS, HISTORY_DESCRIPTION_FIELD_CHANGE, HISTORY_POINTS_FIELD_CHANGE, HISTORY_NUMBER_FIELD_CHANGE, HISTORY_TYPE_FIELD_CHANGE, HISTORY_CONTACT_FIELD_CHANGE, HISTORY_CONTACT_CHANGE } from '../../Constants/actionTypes'

export default function editHistoryReducer(state = {}, action) {
    switch (action.type) {
        case EDIT_HISTORY_REQUEST_SUCCESS:
            return {
                ...state,
                historyData: {
                    requestSuccessful: true
                }
            }
        case EDIT_HISTORY_REQUEST_PENDING:
            return {
                ...state,
                historyData: {
                    requestPending: true
                }
            }
        case EDIT_HISTORY_FORM_VIEW:
            return {
                ...state,
                historyData: {
                    editHistory: true,
                    contact: action.contact,
                    historyData: action.historyData,
                    description: action.description,
                    historypoints: action.historypoints,
                    historynumber: action.historynumber,
                    incidenttype: action.incidenttype
                }
            }
        case HISTORY_CONTACT_FIELD_CHANGE: {
            return {
                ...state,
                historyData: {
                    ...state.historyData,
                    contact: action.contact
                }
            }
        }
        case HISTORY_DESCRIPTION_FIELD_CHANGE:
            return {
                ...state,
                historyData: {
                    ...state.historyData,
                    description: action.description
                }
            }
        case HISTORY_POINTS_FIELD_CHANGE:
            return {
                ...state,
                historyData: {
                    ...state.historyData,
                    historypoints: action.historypoints
                }
            }
        case HISTORY_NUMBER_FIELD_CHANGE:
            return {
                ...state,
                historyData: {
                    ...state.historyData,
                    historynumber: action.historynumber
                }
            }
        case HISTORY_TYPE_FIELD_CHANGE:
            return {
                ...state,
                historyData: {
                    ...state.historyData,
                    incidenttype: action.incidenttype
                }
            }
        case HISTORY_CONTACT_CHANGE:
            return {
                ...state,
                historyData: {
                    ...state.historyData,
                    contact: action.contact.fullname === undefined ? state.historyData.contact : action.contact,
                    contacts: action.contacts
                }
            }
        default:
            return {
                ...state,
                historyData: {
                    requestPending: true
                }
            }
    }
}