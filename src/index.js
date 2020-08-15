import React from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import allReducers from "./Redux/Reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import getToken from "./Auth";
import getToken2 from "./Auth";
import getToken3 from "./Auth";
import _getTokenSuccess from "./Auth";
import * as authActions from "./Auth";
import AuthContainer from "./Redux/AuthContainer";
import mapStateToProps from "./Redux/AuthContainer";
import configureStore from "./Redux/Store/configureStore";

//const store = createStore(allReducers);

//authActions.getToken2();
const store = configureStore();
authActions.getToken2();

//getToken();
//authActions.getToken3();
//var tok = authActions.getToken2;
//var temp = mapStateToProps;
//console.log("Tokenss");
//console.log(temp);
//console.log(authActions._getTokenSuccess);

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
