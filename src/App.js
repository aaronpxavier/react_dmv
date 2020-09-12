import React, { Component, useState, useEffect } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import NavBar from "./Components/Nav/NavBar";
import MobileNavBar from "./Components/Nav/MobileNavBar";
import Footer from "./Components/Nav/Footer";
import NavTest from "./Components/Nav/NavTest";
import "./App.css";
import { GlobalStyles } from "./Components/GlobalTheme/globalStyles";
import { useSelector, Provider } from "react-redux";
import DarkThemeProvider from "./Components/Nav/DarkThemeProvider";
import configureStore from "./Redux/Store/configureStore";
const store = configureStore();

export class App extends Component {
  render = () => (
    <div id="all">
      <Provider store={store}>
        <DarkThemeProvider>
          <GlobalStyles />
          {/* Will show navbar unless user screen is less then 500 wide.  */}
          {!!!navigator.userAgent.match(/iphone|android|blackberry/gi) && (
            <NavBar store={store} />
          )}
          {!!navigator.userAgent.match(/iphone|android|blackberry/gi) && (
            <MobileNavBar />
          )}
          {/* <NavTest /> */}
          <div id="dd">{routes}</div>
          <Footer />
        </DarkThemeProvider>
      </Provider>
    </div>
  );
}

export default withRouter(App);
