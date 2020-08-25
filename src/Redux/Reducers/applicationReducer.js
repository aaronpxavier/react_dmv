import { GET_APPLICATIONS_SUCCESS, GET_APPLICATIONS_PENDING, DELETE_POPUP_CHANGE } from "../../Constants/actionTypes"

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
        applicationsData: {
          ...state.applicationsData,
          openDeletePopup: action.open,
          rowData: action.rowData
        },
      }
    default:
      return {...state, applicationsData: {
        requestPending: true,
      },};
  }
}


