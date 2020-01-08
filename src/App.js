import React, { useState } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

import Login from "./components/Login";
import {Registration} from "./components/Registration";
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket";

function App() {
  const [userObject, setUserObject] = useState({});

  return (
    <div>
      <Route
        exact
        path="/"
        render={props => {
          return <Login {...props} setUserObject={setUserObject} />;
        }}
      />

      <Route path="/register" component={Registration} />

      <Route
        path="/dashboard"
        render={props => {
          return <Dashboard {...props} userObject={userObject} />;
        }}
      />

      <Route
        path="/new-ticket"
        render={props => {
          return <NewTicket {...props} userObject={userObject} />;
        }}
      />
    </div>
  );
}

export default App;
