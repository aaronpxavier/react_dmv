import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppointmentRender from './AppointmentRender' ;
import * as appointmentActions from "../../Redux/Actions/appointmentActions";

const Appointments = (props) => {
  useEffect(() => {
    const { actions } = props;
    console.log("Appointment Container Props", props);  
    //contains action object and list of methods, those methods are my actions
    
    actions.getAppointments();
  }, []);
  return <AppointmentRender {...props}></AppointmentRender>
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appointmentActions, dispatch), //this dispatch parameter is what's binding actions to props and it's going to my appointment Actions
  };
}

function mapStateToProps (state) {
  return {
    appointmentData: state.appointmentReducer.appointmentsData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
