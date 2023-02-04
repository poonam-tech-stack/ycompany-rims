import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Routes from "./components/Routes";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/shop">
        <Routes />
      </Route>
      <Redirect to="/shop" from="/" />
    </Switch>
  </Router>,
  document.getElementById("product")
);
