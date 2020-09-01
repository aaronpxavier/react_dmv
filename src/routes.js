import React from "react";
import { Switch, Route } from "react-router-dom";
import Activites from "./Components/Activites/Activities";
import Applications from "./Components/Applications/ApplicationsContainer";
import Customers from "./Components/Customers/CustomerContainer";
import History from "./Components/History/HistoryContainer";
import NewApplication from "./Components/NewApplication/NewApplication";
import Vehicles from "./Components/Vehicles/VehiclesContainer";
import AuthContainer from "./Components/Auth/AuthContainer";
import Appointments from "./Components/Appointments/AppointmentsContainer";

import EditApplication from './Components/EditApplication/EditApplicationContainer'

export default (
  <Switch>
    <Route exact path="/" component={Activites} />
    <Route exact path="/applications" component={Applications} />
    <Route exact path="/customers" component={Customers} />
    <Route exact path="/history" component={History} />
    <Route exact path="/newapplication" component={NewApplication} />
    <Route exact path="/vehicles" component={Vehicles} />
    <Route exact path="/appointments" component={Appointments} />
    <Route exact path="/auth" component={AuthContainer} />
    <Route exact path="/applications/edit/:appId" component={EditApplication}/>
  </Switch>
);
