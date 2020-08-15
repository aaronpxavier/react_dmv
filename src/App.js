import React, { Component } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import configureStore from "./Redux/Store/configureStore";

//const store = configureStore();

export class App extends Component {
  render = () => (
    <div>
      Dmv React Basic
      <Nav />
      {routes}
    </div>
  );
}

export default withRouter(App);
