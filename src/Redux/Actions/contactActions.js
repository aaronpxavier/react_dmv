import react from 'react'
import { DYN_TOKEN_KEY } from '../../Constants/sessionKeys'

import axios from 'axios'

export function getContacts() {
    return (dispatch) => {
        return axios.get('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts?$select=emailaddress1,fullname&$filter=firstname ne null and  emailaddress1 ne null&$count=true', {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem(DYN_TOKEN_KEY),
                'OData-MaxVersion': '4.0',
                'OData-Version': '4.0',
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8",
                "Prefer": "odata.include-annotations=\"*\",odata.maxpagesize=105"
            }
        }).then((response) => {
            dispatch(getRequestContacts(response.data))
        })
    }
}

export function getRequestContacts(contacts) {
    return {
        type: "GET_CONTACTS",
        contacts: contacts
    }
}