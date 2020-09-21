import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Footer() {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  return (
    /*The body the footer follows needs to have 
        a min-height of about 100vh or the footer wont be on the bottom for
        shorter content*/
    <footer
      id="footer"
      style={{
        backgroundColor: darkThemeEnabled ? "#01393f" : "",
        color: darkThemeEnabled ? "#4447e4" : "",
      }}
    >
      <link rel="stylesheet" href="TopNav.css"></link>
      <div>
        <div
          id="footContainer"
          style={{
            backgroundColor: darkThemeEnabled ? "#01393f" : "",
            color: darkThemeEnabled ? "#4447e4" : "",
          }}
        >
          <ul>
            <p
              style={{
                color: darkThemeEnabled ? "#4447e4" : "",
              }}
            >
              {" "}
              This is the footer
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
}

//export default withRouter(Nav);
