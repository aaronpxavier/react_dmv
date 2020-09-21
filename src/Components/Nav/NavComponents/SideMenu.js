import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  DirectionsCar,
  Contacts,
  Home,
  LibraryBooks,
  Schedule,
  PostAdd,
  Receipt,
} from "@material-ui/icons";

export default function SideMenu() {
  return (
    <div id="SideMenu">
      <div id="Mtoolbar" />
      <Typography variant="h5" noWrap>
        DMV Logo Here
      </Typography>
      <Divider />
      <List>
        <ListItem button component="a" href="#/">
          <ListItemIcon id="MobileIcons">
            <Home />
          </ListItemIcon>
          <ListItemText> Activities</ListItemText>
        </ListItem>

        <ListItem button component="a" href="#/applications">
          <ListItemIcon id="MobileIcons">
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText> Applications</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#/customers">
          <ListItemIcon id="MobileIcons">
            <Contacts />
          </ListItemIcon>
          <ListItemText> Customers</ListItemText>
        </ListItem>

        <ListItem button component="a" href="#/history">
          <ListItemIcon id="MobileIcons">
            <Receipt />
          </ListItemIcon>
          <ListItemText> History</ListItemText>
        </ListItem>

        <ListItem button component="a" href="#/newapplication">
          <ListItemIcon id="MobileIcons">
            <PostAdd />
          </ListItemIcon>
          <ListItemText> New Application</ListItemText>
        </ListItem>

        <ListItem button component="a" href="#/vehicles">
          <ListItemIcon id="MobileIcons">
            <DirectionsCar />
          </ListItemIcon>
          <ListItemText> Vehicles</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href="#/appointments">
          <ListItemIcon id="MobileIcons">
            <Schedule />
          </ListItemIcon>
          <ListItemText> Appointments</ListItemText>
        </ListItem>
      </List>
      {/* <DarkThemeToggle /> */}
    </div>
  );
}
