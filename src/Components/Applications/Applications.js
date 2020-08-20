import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Redux/Actions/applicationActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";

function createData(applicationNumber, applicationType) {
  return { applicationNumber, applicationType };
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class Applications extends React.Component {
  async componentDidMount() {
    this.props.getApplications();
  }

  createRows = () => {
    let rows = [];
    for (
      let i = 0;
      i < this.props.applicationReducer.applications.value.length;
      i++
    ) {
      rows.push(
        createData(
          this.props.applicationReducer.applications.value[i]
            .teamtwo_application_number,
          this.props.applicationReducer.applications.value[i]
            .teamtwo_applicationname
        )
      );
    }
    return rows;
  };

  render() {
    // do for loop through the application.values like Avery did in Vehicles.js to assign the number to an
    //application type
    //let rows = this.createRows();
    //if (this.props.applicationReducer.length)
    if (!(this.props.applicationReducer.applications.value == undefined)) {
      let rows = this.createRows();
      return (
        <div>
          <h1>Applications</h1>
          <TableContainer component={Paper}>
            <Table style={{ minWidth: "650px" }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Application #</StyledTableCell>
                  <StyledTableCell align="left">
                    Application Type
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">Year</StyledTableCell>
                  <StyledTableCell align="left">Vin</StyledTableCell>
                  <StyledTableCell align="left">Owner</StyledTableCell> */}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.applicationNumber}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.applicationType}
                    </StyledTableCell>
                    {/* <StyledTableCell align="left">{row.year}</StyledTableCell>
                    <StyledTableCell align="left">{row.vin}</StyledTableCell>
                    <StyledTableCell align="left">{row.owner}</StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }

    return <div>Applications Loading Applications</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Applications);
