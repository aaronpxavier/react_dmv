import React, { useEffect, useState } from "react";
import axios from "axios";
import { dynGetCall, dynPostCall } from "../../Utilities/dyanamicsAPI";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppointmentRender from "./AppointmentRender";
import * as appointmentActions from "../../Redux/Actions/appointmentActions";

const Appointments = (props) => {
  useEffect(() => {
    const { actions } = props;

    actions.getAppointments();

    console.log("Pointment ", props);
  }, []);
  return <AppointmentRender {...props}></AppointmentRender>;
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appointmentActions, dispatch), //this dispatch parameter is what's binding actions to props and it's going to my appointment Actions
  };
}

function mapStateToProps(state) {
  return {
    appointmentData: state.appointmentReducer.appointmentsData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
