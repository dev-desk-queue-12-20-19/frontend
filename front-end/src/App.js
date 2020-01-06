import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div>
        <Login />
        <Registration />
      </div>
    </Router>
  );
}

export default App;
