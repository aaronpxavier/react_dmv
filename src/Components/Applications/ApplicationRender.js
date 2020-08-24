import React, { forwardRef } from 'react';
import { Container, Box, Fab } from "@material-ui/core";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Spinner  from '../Spinner/spinner';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const createTable = (applicationArry) => {
    let columns = [
        { title: 'Application #', field: 'num' },
        { title: 'Application Type', field: 'type' },
        { title: 'Submit Date', field: 'date' },
        { title: 'Application Approved Status', field: 'status' },
    ]
    let data = applicationArry.map(item => {
        return {
            num: item.teamtwo_application_number,
            type: item.teamtwo_applicationname,
            date: new Date(item.teamtwo_submitdate).toDateString(),
            status: item.teamtwo_approvedstatus ? 'Approved': 'Not Approved'
        }
    })

    let actions=[
        {
            icon: () => <Delete color="secondary"></Delete>,
            tooltip: 'Delete Application',
            onClick:(event, rowData) => {
                console.log('delete table click');
            }
        },
        {
            icon: () => <Edit color="primary"></Edit>,
            tooltip: 'Edit Application',
            onClick:(event, rowData) => {
                console.log('edit table click');
            }
        }
    ]
    return (
        <Container>
            <div style={{paddingTop: '50px'}}>
                <Fab style={{margin: '10px'}}size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

                <MaterialTable
                    title='Applications Table'
                    columns={columns}
                    data={data}
                    icons={tableIcons}
                    options={
                        {
                            pageSize: 10,
                            pageSizeOptions: [10],
                            exportButton: true,
                            exportAllData: true,
                            sorting: true,
                            rowStyle: {
                                '&:hover': {
                                    backgroundColor: '#bbdefb',
                                },
                            }
                        }
                    }
                    actions={actions}
                >
                </MaterialTable>
            </div>
        </Container>
    );
}

export default function ApplicationContainer({applicationData}) {
    if (applicationData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (applicationData.requestSuccessful) {
        return createTable(applicationData.appArray)
    }
    return (<div></div>)
}
