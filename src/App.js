import React, { Component } from "react";
import routes from "./routes";
import { withRouter, Redirect } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import { DYN_TOKEN_KEY } from "./Constants/sessionKeys"
import configureStore from "./Redux/Store/configureStore";
import { useHistory } from "react-router-dom";
//const store = configureStore();

export class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.history.push('/auth');
  }
  render = () => {
    if (sessionStorage.getItem(DYN_TOKEN_KEY)) {
      return (
        <div>
          Dmv React Basic
          <Nav />
          {routes}
        </div>
      )
    } else {
      return <div>{routes}</div>
    }
  } 
    
}

export default withRouter(App);
