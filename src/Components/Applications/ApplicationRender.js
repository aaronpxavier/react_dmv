import React from 'react';
import { withStyles, Fab, Table, TableBody, TableContainer, TableHead, Paper, Container, Box, TableCell, TableRow } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Spinner  from '../Spinner/spinner';
import { tableStyles } from '../Styles/Styles';
import { applicationStyles } from './ApplicationStyles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const createRows = (rowsData, classes) => {
    let rows = [];
    rowsData.map(row => {
        rows.push(
        <TableRow className={[classes.root, applicationStyles.table]}>
            <StyledTableCell component="th" scope="row">
                {row.teamtwo_application_number}
            </StyledTableCell>
            <StyledTableCell align="left">
                {row.teamtwo_applicationname}
            </StyledTableCell>
            <StyledTableCell>{(new Date(row.teamtwo_submitdate)).toDateString()}</StyledTableCell>
            <StyledTableCell>{row.teamtwo_approvedstatus ? 'Approved': 'Not Approved'}</StyledTableCell>
        </TableRow>)
    })
    return  rows;
};

const createTable = (applicationArry, classes) => {
    console.log(applicationArry)
    
    return (
        <div>
            
            <Container style={{ paddingTop: "10px", padding: '10px'}}>
            <Box>
            <h1 >Applications</h1>
            <div >
                <Fab style={applicationStyles.actionItems} size='medium' color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                <Fab style={applicationStyles.actionItems} size='medium' color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </div>
            <TableContainer component={Paper}>
                <Table style={{ minWidth: "650px" }} size='small' aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.root}>
                        <StyledTableCell>Application #</StyledTableCell>
                        <StyledTableCell align="left"> Application Type </StyledTableCell>
                        <StyledTableCell>Submit Date</StyledTableCell>
                        <StyledTableCell>Application Approved Status</StyledTableCell>
                    </TableRow> 
                </TableHead>
                <TableBody>
                    {
                        createRows(applicationArry, classes)
                    }
                </TableBody>
                </Table>
            </TableContainer>
            </Box>
            </Container>
            </div>
    );
}

export default function ApplicationContainer({applicationData}) {
    let classes = tableStyles();
    console.log(applicationData);
    if (applicationData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (applicationData.requestSuccessful) {
        return createTable(applicationData.appArray, classes)
    }
    return (<div></div>)
}
