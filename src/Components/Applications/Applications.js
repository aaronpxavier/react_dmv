import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Redux/Actions/applicationActions";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
                  <StyledTableCell>Submit Date</StyledTableCell>
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
                    <StyledTableCell>Submit Date</StyledTableCell>
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
