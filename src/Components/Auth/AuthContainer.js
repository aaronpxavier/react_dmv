"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../Redux/Actions/authActions";
import AuthRender  from './AuthRender'

const AuthContainer = (props) => {
  useEffect(() => {
    const { actions } = props;
    actions.get365Token();
  }, []);
  
  
  return(<div><AuthRender {...props}></AuthRender></div>)
};

function mapStateToProps(state) {

  return {
    authData: state.authReducer.authData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

AuthContainer.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
