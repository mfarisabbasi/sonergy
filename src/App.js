import React from "react";
import TopBar from "./comps/TopBar";
import Header from "./comps/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import ContactPage from "./screens/ContactPage";
import AboutUsPage from "./screens/AboutUsPage";
import SolarSystemPage from "./screens/SolarSystemPage";
import LedLightingPage from "./screens/LedLightingPage";
import Footer from "./comps/Footer";
import GetAQuote from "./comps/GetAQuote";
import NotFoundPage from "./screens/NotFoundPage";

const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/led-lighting" component={LedLightingPage} />
        <Route path="/solar-system" component={SolarSystemPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GetAQuote />
    </div>
  );
};

export default App;
