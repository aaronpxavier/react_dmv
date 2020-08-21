import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../Redux/Actions/contactActions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardModal from '../CardModal/CardModal'
import Modal from 'react-modal'
import './Customer.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';





Modal.setAppElement('#root')



function createData(name, email, age, number) {
    return { name, email, age, number };
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
                this.props.contactReducer.contacts.value[i].emailaddress1,
                this.props.contactReducer.contacts.value[i].teamtwo_age,
                this.props.contactReducer.contacts.value[i].teamtwo_contactnumber))


        }
        return rows
    }

state = {
        modalIsOpen: false,
        fullnamesave: '',
        emailsave: '',
        contactnumbersave: '',
        contactagesave: 0
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
                                            <StyledTableRow key={row.name} onClick={() => this.setState({
                                                modalIsOpen: true,
                                                fullnamesave: row.name,
                                                emailsave: row.email,
                                                contactnumbersave: row.number,
                                                contactagesave: row.age})}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Modal isOpen={this.state.modalIsOpen} onRequestClose={() => this.setState({ modalIsOpen: false })}>
                                <div className = "modalContainer">
                                <div className = "modalCard">
                                        <h2>{this.state.fullnamesave}</h2>
                                            <p>  Email:     {this.state.emailsave}</p>
                                            <p> Contact Number:    {this.state.contactnumbersave}</p>
                                            <p>Age:      {this.state.contactagesave}</p>
                                            {console.log(this.state.contactnumbersave)}
                                            <button onClick={() => this.setState({ modalIsOpen: false })}>Close modal</button>
                                </div>
                                </div>
                    
                </Modal>
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
