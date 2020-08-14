import {
  GET_TOKEN_SUCCESFUL,
  GET_TOKEN_PENDING,
  GET_TOKEN_FAILURE,
} from "../../Constants/actionTypes";

//D:/Code/SmoothStack/DmvRedux/react_dmv/src/Constants/actionTypes

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case GET_TOKEN_SUCCESFUL:
      return {
        ...state,
        authData: { token: action.rawIdToken, requestSucessful: true },
      };
    case GET_TOKEN_PENDING:
      return { ...state, authData: { requestPending: true } };
    case GET_TOKEN_FAILURE:
      return { ...state, authData: { requestFailed: true } };
    default:
      return state;
  }
}
