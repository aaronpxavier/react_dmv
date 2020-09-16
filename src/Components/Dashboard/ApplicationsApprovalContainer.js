import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ApplicationsApprovalRender from "./ApplicationsApprovalRender";
import * as applicationActionsCreator from "../../Redux/Actions/dashboardApplicationActions";
import Spinner from "../Spinner/spinner";

class ApplicationsApprovalContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getApplicationsDashboard();
  }

  render() {
    const { applicationsData } = this.props;
    if (applicationsData && applicationsData.requestSuccessful) {
      return <ApplicationsApprovalRender {...applicationsData} />;
    } else {
      return <Spinner></Spinner>;
    }
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    applicationsData: state.dashboardApplicationReducer.dashApplicationsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applicationActionsCreator, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationsApprovalContainer);
