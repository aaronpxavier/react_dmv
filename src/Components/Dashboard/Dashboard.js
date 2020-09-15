import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import PieChartContainer from "./PieChartContainer";
import ContactsContainer from "./ContactsContainer";
import ApplicationsApprovalContainer from "./ApplicationsApprovalContainer";
import TotalApplicationsContainer from "./TotalApplicationsContainer";
import AppListContainer from "./AppListContainer";
import Page from "../Page/Page";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.black,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const [light, setLight] = React.useState(true);
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
      </MuiThemeProvider>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <ContactsContainer />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <ApplicationsApprovalContainer />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <TotalApplicationsContainer />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <AppListContainer />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <PieChartContainer />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
