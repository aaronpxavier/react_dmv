import {
  GET_DASH_APPLICATIONS_SUCCESS,
  GET_DASH_APPLICATIONS_PENDING,
  GET_DASH_APPLICATIONS_FAILED,
} from "../../Constants/actionTypes";

export default function dashboardApplicationReducer(state = {}, action) {
  switch (action.type) {
    case GET_DASH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        dashApplicationsData: {
          dashApplicationArray: action.data.value,
          requestSuccessful: true,
        },
      };
    case GET_DASH_APPLICATIONS_PENDING:
      return {
        ...state,
        dashApplicationsData: {
          requestPending: true,
        },
      };

    case GET_DASH_APPLICATIONS_FAILED:
      return {
        ...state,
        dashApplicationsData: { _getApplicationFailed: true },
      };

    default:
      return state;
  }
}
