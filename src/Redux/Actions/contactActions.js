import { dynGetCall }from '../../Utilities/dyanamicsAPI';

export function getContacts() {
    return (dispatch) => {
        return dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts?$select=emailaddress1,fullname&$filter=firstname ne null and  emailaddress1 ne null&$count=true')
        .then((response) => {
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
