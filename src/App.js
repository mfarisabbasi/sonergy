import React from "react";
import TopBar from "./comps/TopBar";
import Header from "./comps/Header";
import { Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";

import Footer from "./comps/Footer";
import GetAQuote from "./comps/GetAQuote";

const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Route path="/" component={LandingPage} />
      <Footer />
      <GetAQuote />
    </div>
  );
};

export default App;
