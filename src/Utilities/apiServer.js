import Axios from "axios";
import { API_URL } from '../Constants/config';
import { DYN_TOKEN_KEY, USER_TOKEN_KEY, TOKEN_RETRIEVAL_TIME } from '../Constants/sessionKeys';

function _tokenIsCurrent() {
  const MAX_TOKEN_VALID_TIME = 1800 // max time token is valid for in seconds 
  const timeDiff = Date.now() - sessionStorage.getItem(TOKEN_RETRIEVAL_TIME);
  if(timeDiff === 0 || timeDiff/1000 < MAX_TOKEN_VALID_TIME)
    return true;
  return false;
}

export function updateDYNToken() {
    return new Promise (res => {
        if(_tokenIsCurrent())
          res(sessionStorage.getItem(DYN_TOKEN_KEY));
        else {
          Axios.get(API_URL, {
              headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem(USER_TOKEN_KEY)
              }
            })
            .then(data => {
              const TOKEN = data.data.Dyn365Token;
              sessionStorage.setItem(DYN_TOKEN_KEY, TOKEN);
              sessionStorage.setItem(TOKEN_RETRIEVAL_TIME, Date.now())
              res(TOKEN);
            });
        }
    })
}
