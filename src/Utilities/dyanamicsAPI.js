import { updateDYNToken } from './apiServer';
import Axios from "axios";

export function getCallHeader (size) {

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
                    "Prefer": "odata.include-annotations=\"*\",odata.maxpagesize=" + (size || 105)
                }
            })
        );
    });
}

export function getPatchCallHeader () {

    return new Promise( res => {
        updateDYNToken()
        .then (token => res(
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'OData-MaxVersion': '4.0',
                    'OData-Version': '4.0',
                    "Accept": "application/json",
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
        );
    });
}

export function dynGetCall(url, numOfRows) {
    return new Promise (res => {
    getCallHeader(numOfRows)
    .then( header => Axios.get(encodeURI(url), header))
    .then(response => res(response))});
}

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

export function dynPatchCall(url, jsObj) {
    return new Promise (res => {
        getPatchCallHeader()
        .then( header => Axios.patch(encodeURI(url), jsObj, header))
        .then(response => res(response))});
}

export function ajaxPatchCall(url, entity) {
        return new Promise ( res => {
            updateDYNToken()
            .then(token => {
                var req = new XMLHttpRequest();
                req.open("PATCH", url, true);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("Authorization", "Bearer " + token); //Replace token with your token value
                req.onreadystatechange = function() {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 204) {
                            res(204)
                        }
                    }
                };
                req.send(JSON.stringify(entity));
            })
        })
        
    
}

export function ajaxPostCall (url, entity) {
    return new Promise ( res => {
        updateDYNToken()
        .then(token => {
            var req = new XMLHttpRequest();
            req.open("POST",  url, true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "hgb/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Authorization", "Bearer " + token); //Replace token with your token value
            req.onreadystatechange = function() {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 204) {
                        var uri = this.getResponseHeader("OData-EntityId");
                        var regExp = /\(([^)]+)\)/;
                        var matches = regExp.exec(uri);
                        var newEntityId = matches[1];
                        res(newEntityId)
                    } else {

                    }
                }
            }
            req.send(JSON.stringify(entity));
            
        })
    })
}
