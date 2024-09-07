import React from "react";
import "./MainSection.css";

import WhyBrick from "./WhyBrick/WhyBrick";
import AppRelated from "./AppRelated/AppRelated";
import HowItsWork from "./HowItsWork/HowItsWork";
import ConstructionPackages from "./ConstructionPackages/ConstructionPackages";
import OurProjects from "./OurProjects/OurProjects";
import ReferralProgram from "./ReferralProgram/ReferralProgram";
import BankPatners from "./BankPatners/BankPatners";
import Hirethebesthouse from "./Hirethebesthouse/Hirethebesthouse";
import FAQ from "./FAQ/FAQ";
import Services from "./Services/Services";
import Home from "./Home/Home";
const MainSection = () => {
  return (
    <div className="main-container">
      <Home />
      <Services />
      <WhyBrick />
      <AppRelated />
      <HowItsWork />
      <OurProjects />
      <ConstructionPackages />
      <ReferralProgram />
      <BankPatners />
      <Hirethebesthouse />
      <FAQ />
    </div>
  );
};

export default MainSection;
