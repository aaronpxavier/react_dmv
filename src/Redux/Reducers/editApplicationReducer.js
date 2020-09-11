import {
    EDIT_APPLICATION_REQUEST_PENDING, 
    EDIT_APPLICATION_REQUEST_SUCCESS, 
    EDIT_FORM_VIEW, 
    OWNER_CHANGE, 
    TYPE_CHANGE,
    CONTACT_CHANGE,
    APPROVED_STATUS_CHANGED,
    DESCRIPTION_FIELD_CHANGED,
    DATE_FIELD_CHANGED } from "../../Constants/actionTypes"
  
  export default function editApplicationReducer(state = {}, action) {
    switch (action.type) {
      case EDIT_APPLICATION_REQUEST_SUCCESS:
        return {
          ...state,
          applicationData: {
            requestSuccessful: true,
          },
        };
      case EDIT_APPLICATION_REQUEST_PENDING:
        return {
          ...state,
          applicationData: {
            requestPending: true,
          },
        }
      case EDIT_FORM_VIEW:
        let appType = action.applicationData && action.applicationData.teamtwo_applicationname ? action.applicationData.teamtwo_applicationname : undefined;
        let ownerId = action.applicationData && action.applicationData._ownerid_value ? action.applicationData._ownerid_value : undefined;
        return {
          ...state,
          applicationData: {
            editApplication: true,
            isPost: action.isPost,
            contact: action.contact || undefined,
            data: action.applicationData || undefined,
            dynUser: action.userData,
            ownerId: ownerId,
            appType: appType || undefined
          },
        }
      
      case OWNER_CHANGE:
        return {
          ...state,
          applicationData: {
            ...state.applicationData,
            ownerId: action.user
          }
        }
      case TYPE_CHANGE:
        return {
          ...state,
          applicationData: {
            ...state.applicationData,
            appType: action.data
          }
        }
      case CONTACT_CHANGE:
        return {
          ...state,
          applicationData: {
            ...state.applicationData,
            contact: action.contact.fullname === undefined ? state.applicationData.contact:action.contact,
            contacts: action.contacts
          }
        }
      case APPROVED_STATUS_CHANGED:
        return {
          ...state,
          applicationData: {
            ...state.applicationData,
            approvedStatus: action.status
          }
        }
      case DESCRIPTION_FIELD_CHANGED:
        return {
          ...state,
          applicationData: {
            ...state.applicationData,
            descChanged: true,
            description: action.desc
          }
        }
      case DATE_FIELD_CHANGED:
        return {
          ...state,
          applicationData: {
            ...state.applicationData,
            date: action.date
          }
        }
      default:
        return {
          ...state, 
          applicationData: {
            requestPending: true,
        },
      };
    }
  }
  
  
  