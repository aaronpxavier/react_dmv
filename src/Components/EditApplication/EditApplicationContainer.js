import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditApplicationRender from './EditApplicationRender' ;
import * as editApplicationActions from "../../Redux/Actions/editApplicationActions";

const EditApplication = (props) => {
  useEffect(() => {
    const { actions } = props;
    const { appId } = props.match.params;
    appId === 'add' ?  actions.openAddAppForm() : actions.openEditForm(appId);
  }, []);
  return <EditApplicationRender {...props}/>
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(editApplicationActions, dispatch),
  };
}

function mapStateToProps (state) {
  return {
    applicationData: state.editApplicationReducer.applicationData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditApplication);
