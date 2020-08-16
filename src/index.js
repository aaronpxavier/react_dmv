import React from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import allReducers from "./Redux/Reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import getToken from "./Utilities/MsalAuth/msalAuth";
import configureStore from "./Redux/Store/configureStore";

const store = configureStore();

getToken();

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
