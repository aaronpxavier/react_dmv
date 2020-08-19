import * as Msal from "msal";
import { LOGIN_REDIRECT_URL } from "../../Constants/config";
import { USER_TOKEN_KEY } from "../../Constants/sessionKeys";

function _createMSAL() {
  let organizationURI = "https://mdynamics0077.crm.dynamics.com";
  let tenant = "2df8f3a3-344d-4681-ac70-155db3cbf455";
  let clientId = "63f764bc-8595-4c54-a4a1-6353db3ec141";
  let pageUrl = LOGIN_REDIRECT_URL;
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

export function getTokenPopup() {
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

export function getTokenRedirect(callback) {
  let msal = _createMSAL();
  let authCallback = callback
    ? callback
    : (error, response) => {
        console.log(response);
      };

  if (!sessionStorage.getItem(USER_TOKEN_KEY)) {
    msal.handleRedirectCallback(authCallback);
    msal.loginRedirect();
  } else {
    authCallback();
  }
}
