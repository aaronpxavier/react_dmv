import React, { Component } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Nav/Footer";
//import myFunction from "./Components/Nav/TopNav";
import configureStore from "./Redux/Store/configureStore";

//const store = configureStore();
const pageContainer = {
  // color: "red",
  // backgroundColor: "green",
  minHeight: "95vh",
  position: "relative",
  opacity: "90%",
};
const footerStyle = {
  // color: "red",
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "2.5rem",
  //marginTop: "100vh",
  //paddingTop: "100px",
  // backgroundColor: "red",
};
const spacer = {
  position: "relative",
  // bottom: "0",
  height: "10px",
  // backgroundColor: "red",
  opacity: "90%",
};
const spacerTop = {
  position: "relative",
  height: "40px",
  opacity: "90%",
  // backgroundColor: "red",
};
export class App extends Component {
  render = () => (
    <div style={pageContainer}>
      Dmv React Basic
      <div style={spacerTop} />
      <NavBar />
      <Nav />
      {routes}
      <div style={spacer} />
      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(App);
