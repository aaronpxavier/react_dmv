import {
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_PENDING,
  POST_APPLICATION,
  POST_APPOINTMENT,
  GET_CONTACT_ID_NAME,
  GET_CONTACTS_ID_PENDING,
} from "../../Constants/actionTypes";

export default function appointmentReducer(state = {}, action) {
  switch (action.type) {
    case GET_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        appointmentsData: {
          appArray: action.data.value,
          requestSuccessful: true,
        },
      };
    case POST_APPOINTMENT:
      return {
        ...state,
      };
    case GET_CONTACTS_ID_PENDING:
      return {
        ...state,
        appointmentsData: {
          requestPending: true,
        },
      };
    case GET_APPOINTMENTS_PENDING:
      return {
        ...state,
        appointmentsData: {
          requestPending: true,
        },
      };
    case GET_CONTACT_ID_NAME:
      return {
        ...state,
        appointmentsData: {
          contactData: action.payload,
          contactSuccess: true,
        },
      };

    default:
      return {
        ...state,
        appointmentsData: {
          requestPending: true,
        },
      };
  }
}
