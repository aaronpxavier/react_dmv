import Axios from "axios";
import { API_URL } from '../Constants/config';
import { DYN_TOKEN_KEY, USER_TOKEN_KEY } from '../Constants/sessionKeys';

export function updateDYNToken() {
    return new Promise (res => {
        Axios.get(API_URL, {
            headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem(USER_TOKEN_KEY)
            }
          })
          .then(data => {
            const TOKEN = data.data.Dyn365Token;
            sessionStorage.setItem(DYN_TOKEN_KEY, TOKEN);
            res(TOKEN);
          });
    })
}


