import React, { Component } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import {DYN_TOKEN_KEY} from "./Constants/sessionKeys"

export class App extends Component {

  constructor(props) {
    super(props);
    if (!sessionStorage.getItem(DYN_TOKEN_KEY)) {
      props.history.push('/auth');
    }
  }

  render = () => {
    return (
      <div>
        Dmv React Basic
        <Nav />
        {routes}
      </div>
    )
    
  } 

}

export default withRouter(App);
