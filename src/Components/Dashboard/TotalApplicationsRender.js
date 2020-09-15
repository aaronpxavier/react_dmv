import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import MoneyIcon from "@material-ui/icons/Money";

import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56,
  },
}));

const TotalApplicationsRender = ({ className, ...props }) => {
  const classes = useStyles();
  const totalApplications = props.dashApplicationArray.length;
  return (
    <Card className={clsx(classes.root, className)} {...props}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL APPLICATIONS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {totalApplications}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalApplicationsRender.propTypes = {
  className: PropTypes.string,
};

export default TotalApplicationsRender;
