import { GET_TOKEN_SUCCESFUL, GET_TOKEN_FAILURE, GET_TOKEN_PENDING, TOKEN_AUTH_FAILED } from "../../Constants/actionTypes";
import { updateDYNToken } from '../../Utilities/apiServer';

import Axios from "axios";

export const get365Token = () => {
  return dispatch => {
    dispatch(_getTokenStarted());
    return updateDYNToken()
    .then(res => {
      if (res.data.Dyn365Token) {
        dispatch(_getTokenSuccess(res));
      } else {
        dispatch(_tokenAuthFailed());
      }
      
    })
    .catch( (error) => {
      dispatch(_getTokenFailed(error))
    })
  }
}

const _getTokenSuccess = (res) => {
  console.log(res.data);
  return {
      type: GET_TOKEN_SUCCESFUL,
      data:  res.data
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
