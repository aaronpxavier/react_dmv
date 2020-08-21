import React, { Component } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Nav/Footer";
import "./App.css";

export class App extends Component {
  render = () => (
    <div>
      <NavBar />
      <div id="dd">{routes}</div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
