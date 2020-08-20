import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import routes from "../../routes";

import * as styles2 from "./TopNav.css";

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
} from "@material-ui/icons";

import {
  AppBar,
  Menu,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Typography,
  Tab,
  Tabs,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

export default class NavBar extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  handleChange = (event, value) => {
    this.setState({ activeTabIndex: value });
  };
  render() {
    const { classes } = this.props;
    const { activeTabIndex } = this.state;
    return (
      <div>
        <AppBar id="AppBar" position="static" top="0">
          <Toolbar>
            <Typography variant="title" color="inherit" component="h2">
              DMV APP
            </Typography>
            <Tabs id="Tabs" value={activeTabIndex} onChange={this.handleChange}>
              <Tab
                id="Tab"
                label={
                  <>
                    <Home fontSize="inherit" /> Activities
                  </>
                }
                to="/"
                component={Link}
              />

              <Tab
                id="Tab"
                label={
                  <>
                    <LibraryBooks fontSize="inherit" /> Applications
                  </>
                }
                to="/applications"
                component={Link}
              />
              <Tab
                id="Tab"
                label={
                  <>
                    <Dns fontSize="inherit" /> Cardmodal
                  </>
                }
                to="/cardmodal"
                component={Link}
              />
              <Tab
                id="Tab"
                label={
                  <>
                    <Contacts fontSize="inherit" /> Customers
                  </>
                }
                to="/customers"
                component={Link}
              />
              <Tab
                id="Tab"
                label={
                  <>
                    <Receipt fontSize="inherit" /> History
                  </>
                }
                to="/history"
                component={Link}
              />
              <Tab
                id="Tab"
                label={
                  <>
                    <PostAdd fontSize="inherit" /> New Application
                  </>
                }
                to="/newapplication"
                component={Link}
              />
              <Tab
                id="Tab"
                label={
                  <>
                    <DirectionsCar fontSize="inherit" /> Vehicles
                  </>
                }
                to="/vehicles"
                component={Link}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

//export default withRouter(Nav);
