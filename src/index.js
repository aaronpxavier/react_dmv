import React from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { getTokenRedirect } from "./Utilities/MsalAuth/msalAuth";
import configureStore from "./Redux/Store/configureStore";
import { USER_TOKEN_KEY } from './Constants/sessionKeys'
const store = configureStore();

  getTokenRedirect(() => {
    ReactDom.render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>,
      document.getElementById("root")
    );
  });



serviceWorker.unregister();
