import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ApplicationRender from './ApplicationRender' ;
import * as applicationActions from "../../Redux/Actions/applicationActions";

const Applications = (props) => {
  useEffect(() => {
    const { actions } = props;
    actions.getApplications();
  }, []);
  return <ApplicationRender {...props}></ApplicationRender>
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applicationActions, dispatch),
  };
}

function mapStateToProps (state) {
  return {
    applicationData: state.applicationReducer.applicationsData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
