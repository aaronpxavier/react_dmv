import React, { forwardRef } from "react";
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
import { Container, Fab } from "@material-ui/core";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import {
  DRIVING_LICENSE,
  LEARNER_PERMIT,
} from "../../Constants/applicationTypes";
import { useSelector, useDispatch } from "react-redux";

// function isEnabled() {
//   const darkThemeEnabled = useSelector(
//     (state) => state.themeReducer.darkThemeEnabled
//   );
//   return darkThemeEnabled;
// }

const createTableColumns = () => {
  return [
    { title: "Application #", field: "num" },
    { title: "Application Type", field: "type" },
    { title: "Submit Date", field: "date", defaultSort: "desc", type: "date" },
    { title: "Application Approved Status", field: "status" },
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
      num: item.teamtwo_application_number,
      type: type,
      date: new Date(item.teamtwo_submitdate),
      status: item.teamtwo_approvedstatus ? "Approved" : "Not Approved",
      id: item.teamtwo_applicationid,
    };
  });
};

export default function ApplicationTable(props) {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => (
      <SaveAlt
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "black" }}
      />
    )),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => (
      <FirstPage
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "black" }}
      />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPage
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "black" }}
      />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRight
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "black" }}
      />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "black" }}
      />
    )),
    ResetSearch: forwardRef((props, ref) => (
      <Clear
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "grey" }}
      />
    )),
    Search: forwardRef((props, ref) => (
      <Search
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "white" : "black" }}
      />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward
        {...props}
        ref={ref}
        style={{ color: darkThemeEnabled ? "green" : "green" }}
      />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  let { actions } = props;
  let columns = createTableColumns();
  let data = createTableData(props.applicationData.appArray);

  let tableActions = [
    {
      icon: () => <Delete color="secondary"></Delete>,
      tooltip: "Delete Application",
      onClick: (event, rowData) => {
        actions.openDeletePopup(rowData);
      },
    },
    {
      icon: () => <Edit color="primary"></Edit>,
      tooltip: "Edit Application",
      onClick: (event, rowData) => {
        console.log("edit table click");
        props.history.push(`/applications/edit/${rowData.id}`);
      },
    },
  ];
  return (
    <Container id="tContainer">
      <div style={{ paddingTop: "50px" }}>
        <Fab
          onClick={() => props.history.push("/applications/edit/add")}
          style={{ margin: "10px" }}
          size="small"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>

        <MaterialTable
          title="Applications Table"
          columns={columns}
          data={data}
          icons={tableIcons}
          id="dTable"
          style={{
            // fontSize: 100,
            textAlign: "center",
            color: darkThemeEnabled ? "white" : "black",
            backgroundColor: darkThemeEnabled ? "black" : "white",
          }}
          options={{
            pageSize: 10,
            pageSizeOptions: [10],
            exportButton: true,
            exportAllData: true,
            sorting: true,
            thirdSortClick: false,

<<<<<<< HEAD
    let tableActions=[
        {
            icon: () => <Delete color="secondary"></Delete>,
            tooltip: 'Delete Application',
            onClick:(event, rowData) => {
                actions.openDeletePopup(rowData);
            }
        },
        {
            icon: () => <Edit color="primary"></Edit>,
            tooltip: 'Edit Application',
            onClick:(event, rowData) => {
                props.history.push(`/applications/edit/${rowData.id}`)
            }
        }
    ]
    return (
        <Container>
            <div style={{paddingTop: '50px'}}>
                <Fab onClick={()=>props.history.push('/applications/edit/add')} style={{margin: '10px'}}size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
=======
            headerStyle: {
              root: {
                "&:hover": {
                  backgroundColor: darkThemeEnabled ? "white" : "black",
                  color: darkThemeEnabled ? "white" : "black",
                },
              },
              color: darkThemeEnabled ? "white" : "black",
              backgroundColor: darkThemeEnabled ? "black" : "white",
            },
>>>>>>> master

            rowStyle: {
              "&:hover": {
                backgroundColor: darkThemeEnabled ? "#bbdefb" : "white",
                color: darkThemeEnabled ? "white" : "black",
              },
            },
            searchFieldStyle: {
              color: darkThemeEnabled ? "white" : "black",
              backgroundColor: darkThemeEnabled ? "black" : "white",
            },
            actionsCellStyle: {
              color: darkThemeEnabled ? "white" : "black",
              backgroundColor: darkThemeEnabled ? "black" : "white",
            },
          }}
          actionsCellStyle={{
            color: darkThemeEnabled ? "white" : "black",
            backgroundColor: darkThemeEnabled ? "black" : "white",
          }}
          actions={tableActions}
        ></MaterialTable>
      </div>
    </Container>
  );
}
