import React from "react";
import TopBar from "./comps/TopBar";
import Header from "./comps/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import ContactPage from "./screens/ContactPage";
import Footer from "./comps/Footer";
import GetAQuote from "./comps/GetAQuote";

const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Switch>
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Footer />
      <GetAQuote />
    </div>
  );
};

export default App;
