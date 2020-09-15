import React, { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import {
  DRIVING_LICENSE,
  LEARNER_PERMIT,
} from "../../Constants/applicationTypes";

import clsx from "clsx";

import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const createTableColumns = () => {
  return [
    { title: "Application Type", field: "type" },
    { title: "Description", field: "description" },
    { title: "Submit Date", field: "date", defaultSort: "desc", type: "date" },
    { title: "Status", field: "status" },
  ];
};

const createTableData = (array) => {
  let type;

  return array.map((item) => {
    switch (item.teamtwo_applicationname) {
      case LEARNER_PERMIT:
        type = "Learner's Permit";
        break;
      case DRIVING_LICENSE:
        type = "Driver's License";
        break;
      default:
        type = item.teamtwo_applicationname;
    }
    return {
      type: type,
      description: item.teamtwo_applicationdescription,
      date: new Date(item.teamtwo_submitdate),
      status: item.teamtwo_approvedstatus ? "Approved" : "Not Approved",
      id: item.teamtwo_applicationid,
    };
  });
};

export default function AppListRender({ className, ...props }) {
  const classes = useStyles();
  let columns = createTableColumns();
  let data = createTableData(props.dashApplicationArray);

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid>
          <MaterialTable
            title="Application Info"
            columns={columns}
            data={data}
            icons={tableIcons}
            options={{
              pageSize: 7,
              pageSizeOptions: [7],
              exportButton: true,
              exportAllData: true,
              sorting: true,
              thirdSortClick: false,
              rowStyle: {
                "&:hover": {
                  backgroundColor: "#bbdefb",
                },
              },
            }}
          ></MaterialTable>
        </Grid>
      </CardContent>
    </Card>
  );
}
