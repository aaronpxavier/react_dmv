import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { TOGGLE_DARKTHEME } from "../../../Constants/actionTypes";
import {
  AccountCircle,
  ExitToApp,
  AccountBox,
  Settings,
  Room,
} from "@material-ui/icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
//import Axios from "axios";
import { logout } from "../../../Utilities/MsalAuth/msalAuth";
import { withStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//logs the user out
function handleLogout() {
  logout();
}

//calls logout confirm
function logoutThing() {
  confirmAlert({
    title: "Confirm Logout",
    message: "Are you sure you want to logout?",
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          handleLogout();
        },
      },
      {
        label: "No",
        onClick: () => console.log("no"),
      },
    ],
  });
}

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      // backgroundColor: "#017c8a",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "theme.palette.common.white",
      },
    },
  },
}))(MenuItem);

export default function ProfileIcon() {
  //allows the file to see what the current dark theme state is
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      borderColor: "#01393f",
      color: "white",
      backgroundColor: darkThemeEnabled ? "#01393f" : "#006570",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));
  const [anchorEl, setAnchorEl] = React.useState(null);

  //calls for the closing of the menu when an option is clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //closes the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  //changes the address to maps
  const toMaps = () => {
    window.location.href = "#/maps";
  };

  return (
    <div>
      <AccountCircle
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#f2f2f2"
        id="Profile"
        // size="50px"
        onClick={handleClick}
      ></AccountCircle>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          onClick={() => {
            logoutThing();
            handleClose();
          }}
          style={{
            color: darkThemeEnabled ? "#4447e4" : "",
            backgroundColor: darkThemeEnabled ? "#01393f" : "",
          }}
        >
          <ListItemIcon
            id="MobileIcons"
            style={{
              color: darkThemeEnabled ? "#4447e4" : "",
              backgroundColor: darkThemeEnabled ? "#01393f" : "",
            }}
          >
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleClose();
            toMaps();
          }}
          style={{
            color: darkThemeEnabled ? "#4447e4" : "",
            backgroundColor: darkThemeEnabled ? "#01393f" : "",
          }}
        >
          <ListItemIcon
            id="MobileIcons"
            style={{
              color: darkThemeEnabled ? "#4447e4" : "",
              backgroundColor: darkThemeEnabled ? "#01393f" : "",
            }}
          >
            <Room fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Map"
            style={{
              color: darkThemeEnabled ? "#4447e4" : "",
              backgroundColor: darkThemeEnabled ? "#01393f" : "",
            }}
          />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleClose();
          }}
          style={{
            color: darkThemeEnabled ? "#4447e4" : "",
            backgroundColor: darkThemeEnabled ? "#01393f" : "",
          }}
        >
          <ListItemIcon
            id="MobileIcons"
            style={{
              color: darkThemeEnabled ? "#4447e4" : "",
              backgroundColor: darkThemeEnabled ? "#01393f" : "",
            }}
          >
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
