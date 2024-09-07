import React from "react";
import "./Career.css";
import { IoHome } from "react-icons/io5";
import Whatwefocus from "../About/Whatwefocus/Whatwefocus";
import OurEqual from "./OurEqual/OurEqual";
import Opportunities from "./Opportunities/Opportunities";
import Hirethebesthouse from "../MainSection/Hirethebesthouse/Hirethebesthouse";
const Career = () => {
  return (
    <div className="career-container">
      <div className="career-first-card">
        <div>
          <h1>Careers</h1>
          <p>
            Brick&Bolt currently employs 250+ energetic people. We are committed
            to organise one of the most unorganised space using amazing
            technology and created processes. Want to catch up over a cup of
            coffee ?
          </p>
        </div>
        <div className="career-blur-contact"></div>
      </div>
      <div className="career-second-card">
        <IoHome size={30} color="#ff6600" />
        <p>
          We believe deep technology and amazing processes can only fix this
          hugely broken and massive space. If you are problem-solver or want to
          understand how we are disrupting this space - let's chat over a cup of
          coffee !
        </p>
      </div>
      <Whatwefocus
        leftSideTitleF="Perks of working"
        leftSideTitleS="with Brick&Bolt"
        leftSidePara="We are disrupting this space using technology and processes trying to solve unknown problems"
        rightSideFirstF="Fast growing and funded startup"
        rightSideFirstS="Working with best minds"
        rightSideSecondF="Fun working environment"
        rightSideSecondS="Beautiful office in the heart of the city"
        rightSideThirdF="Competitive salary and benefits"
        rightSideThirdS="Disrupting industry using technology and processes."
      />
      <OurEqual />
      <Opportunities />
      <Hirethebesthouse />
    </div>
  );
};

export default Career;
