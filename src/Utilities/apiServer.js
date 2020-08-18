import Axios from 'Axios';
import { API_URL } from '../Constants/config';
import { DYN_TOKEN_KEY, USER_TOKEN_KEY } from '../Constants/sessionKeys';

export function updateDYNToken() {
    new Promise ((res, rej) => {
        Axios.get(API_URL, {
            headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem(USER_TOKEN_KEY)
            }
          })
          .then(data => {
            sessionStorage.setItem(DYN_TOKEN_KEY, res.data.Dyn365Token)
            res(data);
          });
    })
}


