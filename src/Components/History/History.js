import React, { forwardRef } from 'react'
import Spinner from '../Spinner/spinner'
import Modal from 'react-modal'

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
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';
import { findAllByTestId } from '@testing-library/react';


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

function modal(actions, rowData) {

    return (
        <Modal isOpen={true}>
            <div className="modalContainer">
                <div className="modalCard">
                    <h2>{rowData.customer}</h2>
                    <p>  Type:     {rowData.type}</p>
                    <p> Description:     {rowData.description}</p>
                    <p>Points:      {rowData.points}</p>
                    <p>History Number: {rowData.historyNumber}</p>
                    <p>State: {rowData.state}</p>
                    <button onClick={() => actions.closeHistoryModal()}>Close modal</button>
                </div>
            </div>

        </Modal >
    )
}

const createTable = (historyArray, reduxActions) => {

    console.log(historyArray)

    let columns = [
        { title: 'Customer Associated', field: 'customer' },
        { title: 'Incident Type', field: 'type' },
        { title: 'State', field: 'state' }
    ]
    let data = historyArray.map(item => {
        console.log(item["_teamtwo_contacttodrivinghistoryid_value@OData.Community.Display.V1.FormattedValue"])
        return {
            customer: item["_teamtwo_contacttodrivinghistoryid_value@OData.Community.Display.V1.FormattedValue"],
            type: item.teamtwo_incidenttype,
            description: item.teamtwo_drivinghistorydescription,
            points: item.teamtwo_points,
            historyNumber: item.teamtwo_driving_history_number,
            state: item["teamtwo_drivinghistorystate@OData.Community.Display.V1.FormattedValue"]

        }
    })

    let actions = [
        {
            icon: () => <Delete color="secondary"></Delete>,
            tooltip: 'Delete Application',
            onClick: (event, rowData) => {
                console.log('delete table click');
            }
        },
        {
            icon: () => <Edit color="primary"></Edit>,
            tooltip: 'Edit Application',
            onClick: (event, rowData) => {
                console.log('edit table click');
            }
        },
        {
            icon: () => '...',
            tooltip: 'See more',
            onClick: (event, rowData) => {
                console.log(rowData)
                console.log('opening module on click functionality goes here I think')
                reduxActions.openHistoryModal(rowData)
            }
        }
    ]
    return (
        <Container>
            <div style={{ paddingTop: '50px' }}>
                <Fab style={{ margin: '10px' }} size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

                <MaterialTable
                    title='Driving History'
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


export default function historyContainer(props) {
    if (props.historyData.requestPending) {
        return (
            <Spinner></Spinner>
        )
    }
    else if (props.historyData.openHistoryPopup) {
        return modal(props.actions, props.historyData.rowData)
    }
    else if (props.historyData.requestSuccessful) {
        return createTable(props.historyData.historyArray, props.actions)
    }
    return (<div></div>)
}