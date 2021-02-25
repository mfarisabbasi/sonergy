import React from "react";
import SectionFive from "../comps/LandingPage/SectionFive";
import SectionFour from "../comps/LandingPage/SectionFour";
import SectionOne from "../comps/LandingPage/SectionOne";
import SectionSeven from "../comps/LandingPage/SectionSeven";
import SectionSix from "../comps/LandingPage/SectionSix";
import SectionThree from "../comps/LandingPage/SectionThree";
import SectionTwo from "../comps/LandingPage/SectionTwo";

const LandingPage = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <SectionFive /> */}
      <SectionSix />
      <SectionSeven />
    </div>
  );
};

export default LandingPage;
