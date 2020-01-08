import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket";

function App() {
  return (
    <div>
      {/* <Route exact path="/" component={Login} />
        <Route path="/register" component={Registration} />
        <Route  path="/dashboard" component={Dashboard}/> */}
      <NewTicket />
    </div>
  );
}

export default App;
