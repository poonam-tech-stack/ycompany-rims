import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Routes from "./components/Routes";

export default () => (
  <Router>
    <Switch>
      <Route path="/cart">
        <Routes />
      </Route>
      <Redirect to="/cart" from="/" />
    </Switch>
  </Router>
);
