import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CartDetails from "../CartDetails";

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <Route exact path={path}>
      <CartDetails />
    </Route>
  );
};

export default Routes;
