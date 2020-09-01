import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppointmentRender from './AppointmentRender' ;
import * as appointmentActions from "../../Redux/Actions/appointmentActions";

const Appointments = (props) => {
  useEffect(() => {
    const { actions } = props; //this is just fancy, could also just be props.actions otherwise would be props.actions redux mystery
    console.log("Appointment Container Props", props);  
    //contains action object and list of methods, those methods are my actions
    var entity = {};
    entity["regardingobjectid_contact_appointment@odata.bind"] = "/contacts(40cda8ca-fcaf-ea11-a812-000d3a8faaa7)";

    entity.subject = "Where can I get a drivers manual";
    entity.scheduledend = new Date("09/10/2020 09:00:00").toISOString();
    entity.scheduledstart = new Date("09/10/2020 08:30:00").toISOString();

    //entity["regardingobjectid@odata.bind"] = "s"
    

    actions.postAppointments(entity);
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
