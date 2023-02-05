import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Routes from "./components/Routes";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/signin">
        <Routes />
      </Route>
      <Redirect to="/signin" from="/" />
    </Switch>
  </Router>,
  document.getElementById("auth")
);
