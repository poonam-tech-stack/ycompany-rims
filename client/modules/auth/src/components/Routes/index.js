import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appTheme } from "shared/AppTheme";

import Login from "../Login";

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Route exact path={`${path}/signIn`}>
        <Login />
      </Route>
    </ThemeProvider>
  );
};

export default Routes;
