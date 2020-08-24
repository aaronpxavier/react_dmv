import React from "react";
import { Switch, Route } from "react-router-dom";
import Activites from "./Components/Activites/Activities";
import Applications from "./Components/Applications/ApplicationsContainer";
import CardModal from "./Components/CardModal/CardModal";
import Customers from "./Components/Customers/Customers";
import History from "./Components/History/History";
import NewApplication from "./Components/NewApplication/NewApplication";
import Vehicles from "./Components/Vehicles/Vehicles";
import AuthContainer from "./Components/Auth/AuthContainer";
import Appointments from "./Components/Appointments/Appointments";

export default (
  <Switch>
    <Route exact path="/" component={Activites} />
    <Route exact path="/applications" component={Applications} />
    <Route exact path="/cardmodal" component={CardModal} />
    <Route exact path="/customers" component={Customers} />
    <Route exact path="/history" component={History} />
    <Route exact path="/newapplication" component={NewApplication} />
    <Route exact path="/vehicles" component={Vehicles} />
    <Route exact path="/appointments" component={Appointments} />
    <Route exact path="/auth" component={AuthContainer} />
  </Switch>
);
