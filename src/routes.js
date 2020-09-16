import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Applications from "./Components/Applications/ApplicationsContainer";
import Customers from "./Components/Customers/CustomerContainer";
import History from "./Components/History/HistoryContainer";
import Vehicles from "./Components/Vehicles/VehiclesContainer";
import AuthContainer from "./Components/Auth/AuthContainer";
import Appointments from "./Components/Appointments/Appointments";
import EditApplication from "./Components/EditApplication/EditApplicationContainer";
import Maps from "./Components/Maps/Maps";
import Appointments from "./Components/Appointments/AppointmentsContainer";
import CreateAppointmentContainer from "./Components/Appointments/CreateAppointmentContainer";
import CreateAppointmentRender from "./Components/Appointments/CreateAppointmentRender";
import EditApplication from "./Components/EditApplication/EditApplicationContainer";
import EditVehicle from "./Components/EditVehicle/EditVehicleContainer";
import EditContact from "./Components/EditContact/EditContactContainer";
import EditHistory from "./Components/EditHistory/EditHistoryContainer";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/applications" component={Applications} />
    <Route exact path="/customers" component={Customers} />
    <Route exact path="/history" component={History} />
    <Route exact path="/vehicles" component={Vehicles} />
    <Route exact path="/appointments" component={Appointments} />
    <Route exact path="/auth" component={AuthContainer} />
    <Route exact path="/applications/edit/:appId" component={EditApplication} />
    <Route exact path="/maps" component={Maps} />
    <Route exact path="/vehicles/edit/:vehicleId" component={EditVehicle} />
    <Route exact path="/customers/edit/:customerId" component={EditContact} />
    <Route exact path="/history/edit/:historyId" component={EditHistory} />
    <Route exact path="/applications/edit/:appId" component={EditApplication} />
    <Route
      exact
      path="/appointments/add"
      component={CreateAppointmentContainer}
    />
  </Switch>
);
