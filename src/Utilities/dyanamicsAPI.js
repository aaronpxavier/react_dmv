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
<<<<<<< HEAD

export function dynDeleteCall(url) {
    return new Promise (res => {
        getCallHeader()
    .then( header => Axios.delete(encodeURI(url), header))
    .then(response => res(response))});
}
=======
>>>>>>> b2fb2df9a0571de74589f4984a4c5dbf5ba8c71d

export function dynDeleteCall(url) {
    return new Promise (res => {
    getCallHeader()
    .then( header => Axios.delete(encodeURI(url), header))
    .then(response => res(response))});
}

export function dynPostCall(url, jsObj) {
    return new Promise (res => {
        getCallHeader()
        .then( header => Axios.post(encodeURI(url), jsObj, header))
        .then(response => res(response))});
}

