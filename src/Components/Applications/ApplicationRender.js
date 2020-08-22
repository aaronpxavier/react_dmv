import React from 'react';
import { Table, TableBody, TableContainer, TableHead, Paper, TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Spinner  from '../Spinner/spinner';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);

export default function ApplicationContainer({applicationData}) {
    console.log(applicationData);
    if (applicationData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (applicationData.requestSuccessful) {
        return createTable(applicationData.appArray)
    }
    return (<div></div>)
}

const createRows = (rowsData) => {
    let rows = [];
    rowsData.map(row => {
        rows.push(
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                {row.teamtwo_application_number}
            </StyledTableCell>
            <StyledTableCell align="left">
                {row.teamtwo_applicationname}
            </StyledTableCell>
            <StyledTableCell>{(new Date(row.teamtwo_submitdate)).toDateString()}</StyledTableCell>
            <StyledTableCell>{row.teamtwo_}</StyledTableCell>
        </StyledTableRow>)
    })
    return  rows;
};

const createTable = (applicationArry) => {
    console.log(applicationArry)
    return (
        <div>
            <h1>Applications</h1>
            <TableContainer component={Paper}>
                <Table style={{ minWidth: "650px" }} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                    <StyledTableCell>Application #</StyledTableCell>
                    <StyledTableCell align="left"> Application Type </StyledTableCell>
                    <StyledTableCell>Submit Date</StyledTableCell>
                    <StyledTableCell>Application Approved Status</StyledTableCell>
                    </StyledTableRow> 
                </TableHead>
                <TableBody>
                    {
                        createRows(applicationArry)
                    }
                </TableBody>
                </Table>
            </TableContainer>
            </div>
    );
}
