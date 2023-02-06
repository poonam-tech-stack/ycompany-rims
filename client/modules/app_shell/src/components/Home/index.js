import React from "react";

import Footer from "../Footer";
import Dashboard from "../Dashboard";

const Offers = React.lazy(() => import("offer/Offers"));

const Home = () => (
  <>
    <main>
      <Offers />
      <Dashboard />
    </main>
    <Footer />
  </>
);

export default Home;
