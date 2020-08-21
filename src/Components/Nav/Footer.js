import React from "react";

import { Link, withRouter } from "react-router-dom";

import * as styles from "./TopNav.css";

export default class Footer extends React.Component {
  render() {
    return (
      /*The body the footer follows needs to have 
        a min-height of about 100vh or the footer wont be on the bottom for
        shorter content*/
      <footer id="footer">
        <link rel="stylesheet" href="TopNav.css"></link>
        <div>
          <div id="footContainer">
            <ul>
              <p> This is the footer</p>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

//export default withRouter(Nav);
