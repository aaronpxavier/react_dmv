import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
import DarkThemeToggle from "./DarkThemeToggle";
import { green } from "@material-ui/core/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MobileNavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div id="MobileMenu">
      <div className={classes.toolbar} />
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} id="AppBar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DMV App
          </Typography>
          {/* <DarkThemeToggle /> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

MobileNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MobileNavBar;
