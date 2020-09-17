import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../../Constants/actionTypes";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";
import { logout } from "../../../Utilities/MsalAuth/msalAuth";

const LogoutButton = ({}) => {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );

  //This function will handle the logout
  function handleLogout() {
    //console.log("Logout was clicked");
    logout();
    // Axios.post("/logout").then(() => (window.location.href = "#/customers"));
  }
  const dispatch = useDispatch();
  return (
    <p title="Logout">
      <ExitToApp
        id="Profile"
        onClick={() => {
          confirmAlert({
            title: "Confirm Logout",
            message: "Are you sure you want to logout?",
            buttons: [
              {
                label: "Yes",
                // onClick: () => alert("Click Yes"),
                onClick: () => {
                  //   handleLogout2;
                  handleLogout();
                },
              },
              {
                label: "No",
                onClick: () => console.log("no"),
              },
            ],
          });
        }}
      />
    </p>
  );
};

export default LogoutButton;
