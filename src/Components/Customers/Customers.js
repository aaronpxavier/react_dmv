import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../Redux/Actions/contactActions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function createData(name, email) {
    return { name, email };
}

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

class Customers extends React.Component {

    async componentDidMount() {

        this.props.getContacts();
    }

    createRows = () => {
        let rows = []
        for (let i = 0; i < this.props.contactReducer.contacts.value.length; i++) {

            rows.push(createData(this.props.contactReducer.contacts.value[i].fullname,
                this.props.contactReducer.contacts.value[i].emailaddress1))


        }
        return rows
    }

    render() {
        if (this.props.contactReducer.contacts.value == undefined) {
            console.log('undefined bro')
            console.log(this.props.contactReducer.contacts.value)
        } else {
            console.log('defined bro')
            console.log(this.props)
            let rows = this.createRows()
            return (
                <div>
                    Customers
                    
                        
                            <TableContainer component={Paper}>
                                <Table style={{ minWidth: '650px' }} aria-label="simple table">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Name</StyledTableCell>
                                            <StyledTableCell align="left">Email</StyledTableCell>

                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <StyledTableCell align="left">{row.email}</StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                   
            )
        }

        

    return <div>Customers Loading Customers</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Customers)
