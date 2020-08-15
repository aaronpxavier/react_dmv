import * as Msal from "msal";

import {
  GET_TOKEN_SUCCESFUL,
  GET_TOKEN_FAILURE,
  GET_TOKEN_PENDING,
} from "./Constants/actionTypes";

function _createMSAL() {
  let organizationURI = "https://mdynamics0077.crm.dynamics.com";
  let tenant = "2df8f3a3-344d-4681-ac70-155db3cbf455";
  let clientId = "63f764bc-8595-4c54-a4a1-6353db3ec141";
  let pageUrl = "http://localhost:3000";
  let msalConfig = {
    auth: {
      clientId: clientId,
      redirectUri: pageUrl,
      tenant: tenant,
      endpoints: { orgUri: organizationURI },
      cacheLocation: "localStorage",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  };
  return new Msal.UserAgentApplication(msalConfig);
}

export default function getToken() {
  console.log("Starting getToken");
  _createMSAL()
    .loginPopup()
    .then((response) => {
      const { idToken } = response;
      return idToken.rawIdToken;
    })
    .catch((err) => {
      console.error(err);
    });
}

export const getToken2 = () => {
  return async (dispatch) => {
    dispatch(_getTokenStarted());
    console.log("Starting");
    _createMSAL()
      .loginPopup()
      .then((res) => {
        //const { idToken } = res;
        dispatch(_getTokenSuccess(res));
        console.log("Success");
      })
      .catch((error) => {
        console.log("Error!");
        console.log(error);
        dispatch(_getTokenFailed(error));
      });
  };
};

export const _getTokenSuccess = (res) => {
  return {
    type: GET_TOKEN_SUCCESFUL,
    data: res.data,
    tokenID: res.idToken.rawIdToken,
    //tokenID and acessToken are the same
    //accessToken: res.idToken.rawIdToken,
    loggedIn: true,
  };
};

const _getTokenFailed = (error) => {
  return {
    type: GET_TOKEN_FAILURE,
    error,
  };
};

const _getTokenStarted = () => {
  return {
    type: GET_TOKEN_PENDING,
  };
};
