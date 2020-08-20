import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../Redux/Actions/vehicleActions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function createData (make, model, year, vin, owner) {
    return { make, model, year, vin, owner };
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


class Vehicles extends React.Component {

    async componentDidMount() {
        this.props.getVehicles();
    }

    createRows = () => {
        let rows = []
    for(let i = 0; i < this.props.vehicleReducer.vehicles.value.length; i++){
        
            rows.push(createData(this.props.vehicleReducer.vehicles.value[i].teamtwo_make,
                this.props.vehicleReducer.vehicles.value[i].teamtwo_model,
                this.props.vehicleReducer.vehicles.value[i].teamtwo_year,
                this.props.vehicleReducer.vehicles.value[i].teamtwo_vin,
                this.props.vehicleReducer.vehicles.value[i].teamtwo_make))
        
        
    }
    return rows
    }

    render() {
        if (this.props.vehicleReducer.vehicles.value == undefined) {
            console.log('undefined bro')
        } else {
            console.log('defined bro')
            console.log(this.props)
            
            let rows = this.createRows()
            return (
                <div>
                    Vehicles
                    
                    <TableContainer component={Paper}>
                        <Table style={{ minWidth: '650px' }} aria-label="simple table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Vehicle Make</StyledTableCell>
                                    <StyledTableCell align="left">Model</StyledTableCell>
                                    <StyledTableCell align="left">Year</StyledTableCell>
                                    <StyledTableCell align="left">Vin</StyledTableCell>
                                    <StyledTableCell align="left">Owner</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.make}
                                        </TableCell>
                                        <StyledTableCell align="left">{row.model}</StyledTableCell>
                                        <StyledTableCell align="left">{row.year}</StyledTableCell>
                                        <StyledTableCell align="left">{row.vin}</StyledTableCell>
                                        <StyledTableCell align="left">{row.owner}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            )
        }

        return (
            <div>
                Vehicles
                Loading Vehicles
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, actionCreators)(Vehicles)