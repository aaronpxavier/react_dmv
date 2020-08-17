import {
  GET_APPLICATIONS,
  POST_APPLICATION,
} from "../../Constants/actionTypes";

import { USER_TOKEN_KEY, DYN_TOKEN_KEY } from "../../Constants/sessionKeys";
import Axios from "axios";

//store headers for fetch
const requestOptions = {
  Authorization: "Bearer " + sessionStorage.getItem(USER_TOKEN_KEY),
};

console.log(requestOptions);

export const getApplications = () => (dispatch) => {
  fetch(
    "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value",
    requestOptions
  )
    .then((res) => res.json())
    .then((applications) =>
      dispatch({
        type: GET_APPLICATIONS,
        payload: applications,
      })
    );
};
