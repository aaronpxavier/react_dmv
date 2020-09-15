import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import PieChartContainer from "./PieChartContainer";
import ContactsContainer from "./ContactsContainer";
import ApplicationsApprovalContainer from "./ApplicationsApprovalContainer";
import TotalApplicationsContainer from "./TotalApplicationsContainer";
import AppListContainer from "./AppListContainer";
import Page from "../Page/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.black,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
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
