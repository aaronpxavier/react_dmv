import {
  GET_APPLICATIONS,
  POST_APPLICATION,
} from "../../Constants/actionTypes";

import { USER_TOKEN_KEY, DYN_TOKEN_KEY } from "../../Constants/sessionKeys";
import Axios from "axios";

console.log(DYN_TOKEN_KEY);
//store headers for fetch
const requestOptions = {
  Authorization: "Bearer " + sessionStorage.getItem(DYN_TOKEN_KEY),
};

console.log(requestOptions);

export const getApplications = () => (dispatch) => {
  //   fetch(
  //     "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value",
  //     requestOptions
  //   )
  //
  console.log("Token Key" + sessionStorage.getItem(DYN_TOKEN_KEY));
  let config = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem(DYN_TOKEN_KEY),
    },
  };
  console.log(config.headers.Authorization);
  console.log("fetching");
  fetch(
    "https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_applications?$select=teamtwo_application_number,teamtwo_applicationdescription,teamtwo_applicationname,teamtwo_approvedstatus,_teamtwo_contacttoapplicationid_value",
    config
  )
    .then((res) => res.json())
    .then((applications) => {
      console.log(
        " Applications ****" + applications.value[0].teamtwo_applicationname
      );
      dispatch({
        type: GET_APPLICATIONS,
        payload: applications,
      });
    });
};
