import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import ProductList from "../ProductList";
import ProductView from "../ProductView";
import ProductSearch from "../ProductSearch";

import { appTheme } from "shared/AppTheme";

const Routes = () => {
  const { path } = useRouteMatch();
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Route exact path={path}>
            <ProductList />
          </Route>
          <Route exact path={`${path}/details/:productid`}>
            <ProductView />
          </Route>
          <Route exact path={`${path}/product/search/:searchTerm`}>
            <ProductSearch />
          </Route>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default Routes;
