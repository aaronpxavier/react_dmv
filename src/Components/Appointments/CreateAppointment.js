import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Appointment.css";
import { FormControl, TextField } from "@material-ui/core";

function CreateAppointment(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [contacts, setContacts] = useState(
    props.appointmentData.contactData.value
  );
  const [subject, setSubject] = useState("");
  const [contactId, setContactId] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    let appointment = {};
    appointment["regardingobjectid_contact_appointment@odata.bind"] =
      "/contacts(" + contactId.toString() + ")";
    appointment[
      "teamtwo_contactappointmentlookupId_Appointment@odata.bind"
    ] = `/contacts(${contactId})`;
    appointment.subject = subject;
    appointment.scheduledstart = startDate.toISOString();
    appointment.scheduledend = endDate.toISOString();
    props.actions.postAppointments(appointment);
    props.history.push("/appointments");
  }

  function getGuid(e) {
    const selectedIndex = e.target.options.selectedIndex;
    setContactId(e.target.options[selectedIndex].getAttribute("value"));
  }

  return (
    <div className="form-container">
      <form className="myForm" onSubmit={onSubmit}>
        <div>
          <span className="label">Appointment Subject:</span>
          <br />
          <input
            className="appntSubject"
            type="text"
            name="appntsubject"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </div>

        <div>
          {" "}
          <span className="label">Start Date:</span>
          <br />{" "}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          {" "}
          <span className="label">End Date: </span>
          <br />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div>
          {" "}
          <span className="label">Choose Contact</span>
          <br />
          <select
            onChange={getGuid} /*{e => setContactId(e.currentTarget.value)}*/
          >
            {contacts.map((contact) => (
              <option //onclick handler
                key={contact.contactid}
                value={contact.contactid}
              >
                {contact.fullname}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="createAppointment">Create Appointment</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAppointment;
