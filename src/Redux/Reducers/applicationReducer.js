import { 
  DELETE_POPUP_CHANGE, 
  APPLICATION_REQUEST_PENDING, 
  APPLICATION_REQUEST_SUCCESS, 
  EDIT_FORM_VIEW, 
  OWNER_CHANGE, 
  TYPE_CHANGE,
  CONTACT_CHANGE,
  APPROVED_STATUS_CHANGED,
  DESCRIPTION_FIELD_CHANGED,
  DATE_FIELD_CHANGED } from "../../Constants/actionTypes"

export default function applicationReducer(state = {}, action) {
  switch (action.type) {
    case APPLICATION_REQUEST_SUCCESS:
      return {
        ...state,
        applicationsData: {
          appArray: action.data.value,
          requestSuccessful: true,
        },
      };
    case APPLICATION_REQUEST_PENDING:
      return {
        ...state,
        applicationsData: {
          requestPending: true,
        },
      }
    case DELETE_POPUP_CHANGE:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          openDeletePopup: action.open,
          rowData: action.rowData
        },
      }
    case EDIT_FORM_VIEW:
      return {
        ...state,
        applicationsData: {
          editApplication: true,
          contact: action.contact,
          data: action.applicationData,
          dynUser: action.userData,
          ownerId: action.applicationData._ownerid_value,
          appType: action.applicationData.teamtwo_applicationname
        },
      }
    
    case OWNER_CHANGE:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          ownerId: action.user
        }
      }
    case TYPE_CHANGE:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          appType: action.data
        }
      }
    case CONTACT_CHANGE:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          contact: action.contact,
          contacts: action.contacts
        }
      }
    case APPROVED_STATUS_CHANGED:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          approvedStatus: action.status
        }
      }
    case DESCRIPTION_FIELD_CHANGED:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          description: action.desc
        }
      }
    case DATE_FIELD_CHANGED:
      return {
        ...state,
        applicationsData: {
          ...state.applicationsData,
          date: action.date
        }
      }
    default:
      return {
        ...state, 
        applicationsData: {
          requestPending: true,
      },
    };
  }
}


