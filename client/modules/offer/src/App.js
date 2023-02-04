import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LatestOffers from "./components/LatestOffers";

const ProductRoutes = React.lazy(() => import("product/Routes"));

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <LatestOffers />
      </Route>
      <Route path="/shop">
        <ProductRoutes />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("offer")
);
