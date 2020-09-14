import React, { forwardRef, useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { dynGetCall, dynPostCall } from "../../Utilities/dyanamicsAPI";
import deleteAppointments from '../../Redux/Actions/appointmentActions';

import { Container, Box, Fab } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Spinner from "../Spinner/spinner";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";

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

const createTable = (applicationArry, reduxActions, props) => {
  let columns = [
    { title: "Appointment #", field: "appntNumber" },
    { title: "Description", field: "description" },
    { title: "Start Date", field: "startdate" },
    { title: "End Date", field: "enddate" },
    { title: "Contact Name", field: "ContactName" },
  ];
  let data = applicationArry.map((item) => {
    return {
      appntNumber: item.teamtwo_appointmentnumber,
      description: item.subject,
      startdate:
        new Date(item.scheduledstart).toLocaleTimeString() +
        " " +
        new Date(item.scheduledstart).toDateString(),
      enddate:
        new Date(item.scheduledend).toLocaleTimeString() +
        " " +
        new Date(item.scheduledend).toDateString(),

      ContactName:
        item[
          "_teamtwo_contactappointmentlookupid_value@OData.Community.Display.V1.FormattedValue"
        ],
      ContactId: item._teamtwo_contactappointmentlookupid_value,
      activityId: item.activityid
    };
  });

  let actions = [
    {
      icon: () => <Delete color="secondary"></Delete>,
      tooltip: "Delete Appointment",
      onClick: (event, rowData) => {
        
        let deleteAppnt = window.confirm("Are you sure you want to delete this appointment?");
        
        if(deleteAppnt){
          alert("hello");
          props.actions.deleteAppointments(rowData.activityId)
         
        }
      },
    },
    {
      icon: () => <Edit color="primary"></Edit>,
      tooltip: "Edit Appointment",
      onClick: (event, rowData) => {
        
       
      },
    },
  ];

  return (
    <Container>
      <div style={{ paddingTop: "50px" }}>
        <Fab
          onClick={() => props.history.push("/appointments/add")}
          style={{ margin: "10px" }}
          size="small"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>

        <MaterialTable
          title="Appointments Table"
          columns={columns}
          data={data}
          icons={tableIcons}
          options={{
            pageSize: 10,
            pageSizeOptions: [10],
            exportButton: true,
            exportAllData: true,
            sorting: true,
            rowStyle: {
              "&:hover": {
                backgroundColor: "#bbdefb",
              },
            },
          }}
          actions={actions}
        ></MaterialTable>
      </div>
    </Container>
  );
};

export default function AppointmentContainer(props) {
  let { appointmentData } = props;
  let { actions } = props;
  if (appointmentData.requestPending) {
    return <Spinner></Spinner>;
  } else if (appointmentData.requestSuccessful) {
    return createTable(appointmentData.appArray, actions, props);
  }

  return <div></div>;
}
