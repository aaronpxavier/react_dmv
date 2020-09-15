import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppListRender from "./AppListRender";
import * as applicationActionsCreator from "../../Redux/Actions/dashboardApplicationActions";
import Spinner from "../Spinner/spinner";

class AppListContainer extends React.Component {
  componentDidMount() {
    this.props.appActions.getApplicationsDashboard();
  }

  render() {
    const { applicationsData } = this.props;
    if (applicationsData && applicationsData.requestSuccessful) {
      return <AppListRender {...applicationsData} />;
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
    appActions: bindActionCreators(applicationActionsCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppListContainer);
