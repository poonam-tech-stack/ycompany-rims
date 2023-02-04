import React from "react";

import Dashboard from "../Dashboard";

const Offers = React.lazy(() => import("offer/Offers"));

const Home = () => (
  <main>
    <Offers />
    <Dashboard />
  </main>
);

export default Home;
