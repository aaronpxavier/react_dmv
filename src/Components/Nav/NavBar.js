import React from "react";

import { Link, withRouter } from "react-router-dom";

import * as styles from "./TopNav.css";

export default class NavBar extends React.Component {
  render() {
    const navContainer = {
      color: "red",
      margin: 0,
      padding: 0,
      textAlign: "center",
      padding: "14px",
      backgroundColor: "#333",
      overflow: "hidden",
      border: "10px",
    };
    const navLinks = {
      // float: "left",
      display: "block",
      color: "green",
      // textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none",
      fontSize: "17px",
    };
    const navWrapper = {
      float: "left",
      display: "block",
      color: "green",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none",
      fontSize: "17px",
    };

    return (
      <nav>
        <link rel="stylesheet" href="TopNav.css"></link>
        <div id="navbar">
          {/* <Link to="/" className="Nav__brand" style={navLinks}>
            <img
              src="https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/N9qai8Q71Q3PuTGmgd2_L4-cQOI=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/US665KGGZVJGTKQNDTLU5TMRXY.jpg"
              width="100"
            />
          </Link> */}

          <div id="navContainer">
            <ul>
              <a href="#/">Activities</a>

              <a href="#/applications">Applications</a>

              <a href="#/cardmodal">Cardmodal</a>

              <a href="#/customers">Customers</a>

              <a href="#/history">History</a>

              <a href="#/newapplication">New Application</a>

              <a href="#/vehicles">Vehicles</a>
            </ul>
          </div>
        </div>
      </nav>

      // <nav className="Nav" id="navbar">
      //   <div className="Nav__container" style={navContainer}>
      //     <Link to="/" className="Nav__brand" style={navLinks}>
      //       <img
      //         src="https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/N9qai8Q71Q3PuTGmgd2_L4-cQOI=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/US665KGGZVJGTKQNDTLU5TMRXY.jpg"
      //         className="Nav__logo"
      //         width="100"
      //       />
      //     </Link>

      //     <div className="Nav__right">
      //       <ul className="Nav__item-wrapper">
      //         <li className="Nav__item">
      //           <Link className="Nav__link" to="/applications" style={navLinks}>
      //             applications
      //           </Link>
      //         </li>
      //         <li className="Nav__item">
      //           <Link className="Nav__link" to="/cardmodal" style={navLinks}>
      //             Cardmodal
      //           </Link>
      //         </li>
      //         <li className="Nav__item">
      //           <Link className="Nav__link" to="/customers" style={navLinks}>
      //             Customers
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

//export default withRouter(Nav);
