import { GET_APPLICATIONS_SUCCESS, GET_APPLICATIONS_PENDING, DELETE_POPUP_CHANGE, DELETE_APPLICATION_PENDING, DELETE_APPLICATION_SUCCESS } from "../../Constants/actionTypes"

export default function applicationReducer(state = {}, action) {
  switch (action.type) {

    case GET_APPLICATIONS_SUCCESS:
      return {
        ...state,
        applicationsData: {
          appArray: action.data.value,
          requestSuccessful: true,
        },
      };
    case GET_APPLICATIONS_PENDING:
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
    case DELETE_APPLICATION_SUCCESS:
      return {
        ...state,
        applicationsData: {
          requestSuccessful: true,
          appArray: action.data.value
        },
      }//DMV-00059-D9T4R
    case DELETE_APPLICATION_PENDING:
    default:
      return {
        ...state, 
        applicationsData: {
          requestPending: true,
      },
    };
  }
}


