import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "shared/AppTheme";

import Footer from "./components/Footer";
import AsyncLoader from "./components/AsyncLoader";
import Home from "./components/Home";
import Header from "./components/Header";

const ProductRoutes = React.lazy(() => import("product/Routes"));
const CartRoutes = React.lazy(() => import("cart/Routes"));
const AuthRoutes = React.lazy(() => import("auth/Routes"));

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", //TODO: Remove localhost linnk..
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <AsyncLoader>
          <Box sx={{minHeight:'100vh', display:'flex', flexDirection: 'column'}}>
          <Header />
          <Switch>
            <>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/auth">
                <AuthRoutes />
              </Route>
              <Route path="/shop">
                <ProductRoutes />
              </Route>
              <Route path="/cart">
                <CartRoutes />
              </Route>
            </>
          </Switch>
          <Footer />
          </Box>
        </AsyncLoader>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
