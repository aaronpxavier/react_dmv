import React from "react";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors,
} from "@material-ui/core";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56,
  },
}));

const ApplicationsApprovalRender = ({ className, ...props }) => {
  const classes = useStyles();

  let Approved = 0;

  for (let i = 0; i < props.dashApplicationArray.length; i++) {
    if (props.dashApplicationArray[i].teamtwo_approvedstatus === true) {
      Approved++;
    }
  }
  const total = props.dashApplicationArray.length;
  const ApprovalRate = Math.round((Approved / total) * 100);

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              APPLICATION APPROVAL RATE
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {ApprovalRate}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress value={ApprovalRate} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ApplicationsApprovalRender;
