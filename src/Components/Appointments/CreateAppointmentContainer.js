import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppointmentRender from "./AppointmentRender";
import * as appointmentActions from "../../Redux/Actions/appointmentActions";
import CreateAppointmentRender from "./CreateAppointmentRender";

const CreateAppointmentContainer = (props) => {
  useEffect(() => {
    const { actions } = props; //this is just fancy, could also just be props.actions otherwise would be props.actions redux mystery

    actions.getAppointmentsContactId();
  }, []);
  return (
    <div>
      <CreateAppointmentRender {...props}></CreateAppointmentRender>
    </div>
  );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAppointmentContainer);
