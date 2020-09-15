import React from "react";
import clsx from "clsx";
import { Doughnut } from "react-chartjs-2";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import FlightIcon from "@material-ui/icons/Flight";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const PieChartRender = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  let driversLicense = 0;
  let driversPermit = 0;
  let otherType = 0;

  for (let i = 0; i < rest.dashApplicationArray.length; i++) {
    if (rest.dashApplicationArray[i].teamtwo_applicationname === 317310000) {
      driversLicense++;
    } else if (
      rest.dashApplicationArray[i].teamtwo_applicationname === 317310001
    ) {
      driversPermit++;
    } else {
      otherType++;
    }
  }

  const total = rest.dashApplicationArray.length;
  const driversLicensePercent = Math.round((driversLicense / total) * 100);
  const driversPermitPercent = Math.round((driversPermit / total) * 100);
  const otherTypePercent = Math.round((otherType / total) * 100);

  const data = {
    datasets: [
      {
        data: [driversLicensePercent, driversPermitPercent, otherTypePercent],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["License", "Permit", "Other"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "Drivers Licence",
      value: driversLicensePercent,
      icon: AirportShuttleIcon,
      color: colors.indigo[500],
    },
    {
      title: "Lerners Permit",
      value: driversPermitPercent,
      icon: DriveEtaIcon,
      color: colors.red[600],
    },
    {
      title: "Other Type",
      value: otherTypePercent,
      icon: FlightIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader title="APPLICATION TYPE" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PieChartRender;
