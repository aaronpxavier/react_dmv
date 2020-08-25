import { GET_APPOINTMENTS_SUCCESS, GET_APPOINTMENTS_PENDING, POST_APPLICATION } from "../../Constants/actionTypes"

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
    case GET_APPOINTMENTS_PENDING:
      return {
      ...state,
      appointmentsData: {
        requestPending: true,
      },
      }
    default:
      return {...state, appointmentsData: {
        requestPending: true,
      },};
  }
}
