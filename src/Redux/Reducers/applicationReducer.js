import { 
  DELETE_POPUP_CHANGE, 
  APPLICATION_REQUEST_PENDING, 
  APPLICATION_REQUEST_SUCCESS, 
} from "../../Constants/actionTypes"

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
    default:
      return {
        ...state, 
        applicationsData: {
          requestPending: true,
      },
    };
  }
}


