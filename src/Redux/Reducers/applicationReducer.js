import { GET_APPLICATIONS_SUCCESS, GET_APPLICATIONS_PENDING } from "../../Constants/actionTypes"

export default function applicationReducer(state = {}, action) {
  console.log(action.data)
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
    default:
      return {...state, applicationsData: {
        requestPending: true,
      },};
  }
}


