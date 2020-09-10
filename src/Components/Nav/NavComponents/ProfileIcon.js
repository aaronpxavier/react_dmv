import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../../Constants/actionTypes";
import {
  AccountCircle,
  ExitToApp,
  AccountBox,
  Settings,
  Room,
} from "@material-ui/icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";
import { logout } from "../../../Utilities/MsalAuth/msalAuth";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

function handleLogout() {
  logout();
}

function logoutThing() {
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
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    borderColor: "#01393f",
    color: "white",
    backgroundColor: "#006570",
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        >
          <ListItemIcon id="MobileIcons">
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <ListItemIcon id="MobileIcons">
            <Room fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <ListItemIcon id="MobileIcons">
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
