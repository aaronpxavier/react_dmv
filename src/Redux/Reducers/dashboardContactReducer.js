import {
  GET_DASH_CONTACTS_SUCCESS,
  GET_DASH_CONTACTS_PENDING,
  GET_DASH_CONTACTS_FAILED,
} from "../../Constants/actionTypes";

export default function dashboardContactReducer(state = {}, action) {
  switch (action.type) {
    case GET_DASH_CONTACTS_SUCCESS:
      return {
        ...state,
        contactsData: {
          contactArray: action.data.value,
          requestSuccessful: true,
        },
      };

    case GET_DASH_CONTACTS_PENDING:
      return {
        ...state,
        contactsData: {
          requestPending: true,
        },
      };

    default:
      return state;
  }
}
