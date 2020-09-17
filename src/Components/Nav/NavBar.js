import React from "react";
// import { useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  AccessAlarm,
  ThreeDRotation,
  DirectionsCar,
  EmojiPeople,
  Contacts,
  Home,
  LibraryBooks,
  Schedule,
  PostAdd,
  Receipt,
  Dns,
  BrandingWatermark,
  ArrowDropDown,
  ArrowDropDownCircleOutlined,
  Brightness5,
  Brightness2,
  WbSunny,
  AccountCircle,
  ArrowBackIos,
  Room,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Menu,
  Toolbar,
  makeStyles,
  useTheme,
  Button,
  IconButton,
  Typography,
  Tab,
  Tabs,
  Switch,
  FormControlLabel,
  FormGroup,
  Hidden,
  Grow,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Divider,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import DarkThemeToggle from "./DarkThemeToggle";
import ProfileIcon from "./NavComponents/ProfileIcon";
import SideMenu from "./NavComponents/SideMenu";
import LogoutButton from "./NavComponents/LogoutButton";
import MobileNavBar from "./MobileNavBar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 240;

//Need to give mobileNav a css so it won't use 'useStyles'
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

function TabContainer(props) {
  return (
    <Typography {...props} component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default class NavBar extends React.Component {
  // tabData = sessionStorage.getItem("lastTab");

  state = {
    activeTabIndex: 0,
    ShowSubBar: false,
    NightTheme: false,
    mobileOpen: false,
    ShowSideMenu: false,
  };

  //This allows the selected tab to stay active when the page
  // is refreshed
  componentWillMount() {
    // console.log("Test");
    // console.log(this.props);
    var lTab = sessionStorage.getItem("lastTab");
    sessionStorage.setItem("darkTheme", true);
    if (isNaN(sessionStorage.getItem("lastTab"))) {
      sessionStorage.setItem("lastTab", 0);
    } else {
      this.setState({ activeTabIndex: parseInt(lTab) });
    }
  }

  //Sets a tab to active when clicked
  handleChange = (event, value) => {
    this.setState({ activeTabIndex: value });
  };

  //Switch when on mobile
  handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  shMenu = () => {
    this.setState((state) => ({ ShowSideMenu: !state.ShowSideMenu }));
  };
  showMenu = () => {
    this.setState(() => ({ ShowSideMenu: true }));
    document.getElementById("SideMenuDiv").focus();
    //window.location.hash = "#SideMenuDiv";
  };
  hideMenu = () => {
    this.setState(() => ({ ShowSideMenu: false }));
  };

  toggleNightTheme = () => {
    this.setState(() => ({ NightTheme: !this.state.NightTheme }));
  };

  render() {
    // const { classes, theme } = this.props;
    // console.log("Props");
    // console.log(this.props);
    // console.log(classes);
    // console.log(theme);
    // console.log("The state is " + this.state.activeTabIndex);
    let tabData = sessionStorage.getItem("lastTab");

    // const { classes } = this.props;
    const { activeTabIndex } = this.state;
    // const darkThemeEnabled = useSelector(
    //   (state) => state.themeReducer.darkThemeEnabled
    // );
    sessionStorage.setItem("lastTab", activeTabIndex);
    // console.log("Active tab");
    // console.log(activeTabIndex);
    //const classes = useStyles();
    return (
      <div>
        <div
        //className={classes.root}
        >
          <AppBar
            id="AppBar"
            // className={classes.appBar}
            position="static"
            top="0"
            style={{
              backgroundColor: this.state.NightTheme ? "#01393f" : "",
            }}
          >
            <Toolbar id="Toolbar">
              <Hidden lgUp>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.showMenu}
                  id="SideMenuButton"
                  // className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Typography variant="inherit" color="inherit" component="h2">
                DMV APP
              </Typography>

              <Hidden mdDown>
                <Tabs
                  id="Tabs"
                  value={activeTabIndex}
                  onChange={this.handleChange}
                >
                  <Tab
                    id="Tab"
                    value={0}
                    label={
                      <>
                        <Home fontSize="inherit" /> Dashboard
                      </>
                    }
                    to="/dashboard"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />

                  <Tab
                    id="Tab"
                    value={1}
                    label={
                      <>
                        <LibraryBooks fontSize="inherit" /> Applications
                      </>
                    }
                    to="/applications"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />
                  <Tab
                    id="Tab"
                    value={3}
                    label={
                      <>
                        <Contacts fontSize="inherit" /> Customers
                      </>
                    }
                    to="/customers"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />
                  <Tab
                    id="Tab"
                    value={4}
                    label={
                      <>
                        <Receipt fontSize="inherit" /> History
                      </>
                    }
                    to="/history"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />

                  <Tab
                    id="Tab"
                    value={6}
                    label={
                      <>
                        <DirectionsCar fontSize="inherit" /> Vehicles
                      </>
                    }
                    to="/vehicles"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />
                  <Tab
                    id="Tab"
                    value={7}
                    label={
                      <>
                        <Schedule fontSize="inherit" /> Appointments
                      </>
                    }
                    to="/appointments"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />
                  <Tab
                    id="Tab"
                    value={7}
                    label={
                      <>
                        <Room fontSize="inherit" /> Maps
                      </>
                    }
                    to="/maps"
                    component={Link}
                    style={{
                      color: this.state.NightTheme ? "#4447e4" : "",
                    }}
                  />
                </Tabs>
              </Hidden>

              {/* <IconButton
              id="IB"
              onClick={() => {
                this.setState({ ShowSubBar: !this.state.ShowSubBar });
              }}
            >
              <ArrowDropDownCircleOutlined />
            </IconButton> */}
              {/* <Hidden mdDown>
                <div id="Spacer2" />
              </Hidden> */}
              <Hidden lgUp>
                <div id="Spacer" />
              </Hidden>
              <div id="rightSide">
                <div id="ThemeContainer" onClick={this.toggleNightTheme}>
                  <DarkThemeToggle />
                </div>
                {/* <LogoutButton /> */}
              </div>
              <ProfileIcon />
            </Toolbar>

            {/* <ClickAwayListener
              onClickAway={this.hideMenu}
              onClickAway={console.log("Click Away")}
            > */}
            <div
              // onBlur={this.hideMenu}
              // onClick={this.hideMenu}
              // onFocus={this.hideMenu}
              id="SideMenuDiv"
              // style={{ display: this.state.ShowSideMenu ? "block" : "none" }}
            >
              <div
                id="SideMenu"
                // onBlur={this.hideMenu}
                style={{
                  width: this.state.ShowSideMenu ? "200px" : "0px",
                  display: this.state.ShowSideMenu ? "block" : "none",
                  backgroundColor: this.state.NightTheme ? "#01393f" : "",
                  color: this.state.NightTheme ? "#4447e4" : "",
                }}

                // style={{ width: this.state.ShowSideMenu ? "30vw" : "0px" }}
              >
                <div id="Mtoolbar" />
                <ArrowBackIos onClick={this.hideMenu} id="backArrow" />
                <Typography variant="h5" noWrap>
                  DMV Logo Here
                </Typography>
                <Divider />
                <List>
                  <ListItem button component="a" href="#/">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <Home />
                    </ListItemIcon>
                    <ListItemText> Activities</ListItemText>
                  </ListItem>

                  <ListItem button component="a" href="#/applications">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <LibraryBooks />
                    </ListItemIcon>
                    <ListItemText> Applications</ListItemText>
                  </ListItem>
                  <ListItem button component="a" href="#/customers">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <Contacts />
                    </ListItemIcon>
                    <ListItemText> Customers</ListItemText>
                  </ListItem>

                  <ListItem button component="a" href="#/history">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <Receipt />
                    </ListItemIcon>
                    <ListItemText> History</ListItemText>
                  </ListItem>

                  <ListItem button component="a" href="#/newapplication">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <PostAdd />
                    </ListItemIcon>
                    <ListItemText> New Application</ListItemText>
                  </ListItem>

                  <ListItem button component="a" href="#/vehicles">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <DirectionsCar />
                    </ListItemIcon>
                    <ListItemText> Vehicles</ListItemText>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button component="a" href="#/appointments">
                    <ListItemIcon
                      id="MobileIcons"
                      style={{
                        color: this.state.NightTheme ? "#4447e4" : "",
                      }}
                    >
                      <Schedule />
                    </ListItemIcon>
                    <ListItemText> Appointments</ListItemText>
                  </ListItem>
                </List>
              </div>
            </div>
            {/* </ClickAwayListener> */}
          </AppBar>

          {/* <Hidden mdUp>
            <MobileNavBar />
          </Hidden> */}
          <Grow in={this.state.ShowSubBar}>
            <AppBar
              id="SubAppBar"
              // style={{ display: this.state.ShowSubBar ? "block" : "none" }}
            >
              <FormGroup id="bBar">
                <DarkThemeToggle />
              </FormGroup>
            </AppBar>
          </Grow>
        </div>
      </div>
    );
  }
}
