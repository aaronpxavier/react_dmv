import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appointmentActions from "../../Redux/Actions/appointmentActions";
import Spinner from "../Spinner/spinner";
import { render } from "@testing-library/react";
import CreateAppointment from "./CreateAppointment";

function CreateAppointmentRender(props) {
  if (props.appointmentData.requestPending) {
    return <Spinner></Spinner>;
  } else if (props.appointmentData.contactSuccess) {
    return <CreateAppointment {...props} />;
  } else {
    return <div>Something Went Wrong :-(</div>;
  }
}

export default CreateAppointmentRender;
