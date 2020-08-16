import {
  GET_TOKEN_SUCCESFUL,
  GET_TOKEN_PENDING,
  GET_TOKEN_FAILURE,
  TOKEN_AUTH_FAILED,
} from "../../Constants/actionTypes";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case GET_TOKEN_SUCCESFUL:
      return {
        ...state,
        authData: { 
          requestSucessful: true, 
          userLoggedIn: true,
          dynamicsToken: action.data
        },
      };
    case GET_TOKEN_PENDING:
      return { 
        ...state, 
        authData: { userLoggedIn: false, requestPending: true} 
      };
    case GET_TOKEN_FAILURE:
      return { ...state, authData: { userLoggedIn: false, requestFailed: true } };
    case TOKEN_AUTH_FAILED:
      return {...state, authData: {tokenAuthFailed: true}}
    default:
      return state;
  }
}
