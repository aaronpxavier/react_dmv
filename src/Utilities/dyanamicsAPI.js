import { updateDYNToken } from './apiServer';
import Axios from "axios";

export function getCallHeader () {

    return new Promise( res => {
        updateDYNToken()
        .then (token => res(
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'OData-MaxVersion': '4.0',
                    'OData-Version': '4.0',
                    "Accept": "application/json",
                    "Content-Type": "application/json; charset=utf-8",
                    "Prefer": "odata.include-annotations=\"*\",odata.maxpagesize=105"
                }
            })
        );
    });
}

export function dynGetCall(url) {
    return new Promise (res => {
        getCallHeader()
    .then( header => Axios.get(encodeURI(url), header))
    .then(response => res(response))});
} 


