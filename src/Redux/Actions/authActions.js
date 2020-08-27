import { GET_TOKEN_SUCCESFUL, GET_TOKEN_FAILURE, GET_TOKEN_PENDING, TOKEN_AUTH_FAILED } from "../../Constants/actionTypes";
import { updateDYNToken } from '../../Utilities/apiServer';


export const get365Token = () => {
  return dispatch => {
    dispatch(_getTokenStarted());
    return updateDYNToken()
    .then(data => {
      if (data) {
        dispatch(_getTokenSuccess(data));
      } else {
        dispatch(_tokenAuthFailed());
      }
      
    })
    .catch( (error) => {
      dispatch(_getTokenFailed(error))
    })
  }
}

const _getTokenSuccess = (dat) => {
  return {
      type: GET_TOKEN_SUCCESFUL,
      data:  dat
  };
}

const _getTokenFailed = (error) => {
  return {
      type: GET_TOKEN_FAILURE,
      error  
  };
}

const _getTokenStarted = () => {
  return {
      type: GET_TOKEN_PENDING
  };
}

const _tokenAuthFailed = () => {
  return {
    type: TOKEN_AUTH_FAILED
};
}
