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
    console.log('Auth Container Called')
  }, []);
  
  
  return(<div><AuthRender {...props}></AuthRender></div>)
};

function mapStateToProps(state) {
  //   console.log("can u see this?");
  //   console.log(state);
  //   console.log(state.authReducer);
  console.log(state.authReducer.authData);

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
