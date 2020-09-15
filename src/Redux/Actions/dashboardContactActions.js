import { dynGetCall } from "../../Utilities/dyanamicsAPI";
import {
  GET_DASH_CONTACTS_SUCCESS,
  GET_DASH_CONTACTS_PENDING,
  GET_DASH_CONTACTS_FAILED,
} from "../../Constants/actionTypes";

export function getContacts() {
  return (dispatch) => {
    dispatch(getRequestContactsPending());
    return dynGetCall(
      "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/contacts?$select=emailaddress1,fullname,teamtwo_age,teamtwo_contactnumber&$filter=fullname ne null and  emailaddress1 ne null&$count=true"
    )
      .then((response) => {
        dispatch(getRequestContacts(response.data));
      })
      .catch((error) => {
        console.log("failed to load contacts");
        dispatch(_getRequestContactsFailed(error));
      });
  };
}

export function getRequestContacts(data) {
  return {
    type: GET_DASH_CONTACTS_SUCCESS,
    data: data,
  };
}

export function getRequestContactsPending() {
  return {
    type: GET_DASH_CONTACTS_PENDING,
  };
}

export function _getRequestContactsFailed(error) {
  return {
    type: GET_DASH_CONTACTS_FAILED,
    error,
  };
}
