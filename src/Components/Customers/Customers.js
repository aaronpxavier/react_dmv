import React, { useState, forwardRef, Component } from 'react'
import Spinner from '../Spinner/spinner'
import Modal from 'react-modal'
import './Customer.css'


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


export default function CustomerTable(props) {


    let columns = [
        { title: 'Customer Name', field: 'num' },
        { title: 'Customer Email', field: 'type' },
    ]
    let data = props.contactData.contactArray.map(item => {
        return {
            num: item.fullname,
            type: item.emailaddress1,
            age: item.teamtwo_age,
            number: item.teamtwo_contactnumber,
            id: item.contactid

        }
    })

    let actions = [
        {
            icon: () => <Delete color="secondary"></Delete>,
            tooltip: 'Delete Customer',
            onClick: (event, rowData) => {
                props.actions.openContactDeletePopup(rowData)
            }
        },
        {
            icon: () => <Edit color="primary"></Edit>,
            tooltip: 'Edit Customer',
            onClick: (event, rowData) => {
                props.history.push(`/customers/edit/${rowData.id}`)
            }
        },
        {
            icon: () => '...',
            tooltip: 'See more',
            onClick: (event, rowData) => {
                props.actions.openCustomerModal(rowData)
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
                    title='Customers'
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




