import React from "react";
import "./About.css";
import { ImHome } from "react-icons/im";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import Whatwefocus from "./Whatwefocus/Whatwefocus";
import OurLeadership from "./OurLeadership/OurLeadership";
import Investorswho from "./Investorswho/Investorswho";
import Hirethebesthouse from "../MainSection/Hirethebesthouse/Hirethebesthouse";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-first-card">
        <div>
          <h1>About Us</h1>
          <p>
            It all started with an idea, that changed the way we look at
            construction today. We started with the aim of making the
            construction simple, transparent and reliable .
          </p>
        </div>
        <div className="about-blur-contact"></div>
      </div>
      <div className="about-second-card">
        <ImHome size={30} color="#ff6600" />
        <p>
          Most customer centric company making Construction absolutely simple,
          transparent <br /> and reliable for everyone
        </p>
        <div className="about-second-time-line-card">
          <div className="about-tabs-number-inner-card">
            <div className="about-tabs-number-single-card">
              <p
              //   style={{
              //     background: fiterData?.number === 2 && "black",
              //     color: fiterData?.number === 2 && "#fff",
              //   }}
              >
                1
              </p>
              <span></span>
            </div>
            <p>Mar 2017</p>
          </div>
          <div className="about-tabs-number-inner-card">
            <div className="about-tabs-number-single-card">
              <p
              //   style={{
              //     background: fiterData?.number === 2 && "black",
              //     color: fiterData?.number === 2 && "#fff",
              //   }}
              >
                2
              </p>
              <span></span>
            </div>
            <p>Feb 2018</p>
          </div>
          <div className="about-tabs-number-inner-card">
            <div className="about-tabs-number-single-card">
              <p
              //   style={{
              //     background: fiterData?.number === 2 && "black",
              //     color: fiterData?.number === 2 && "#fff",
              //   }}
              >
                3
              </p>
              <span></span>
            </div>
            <p>May 2019</p>
          </div>
          <div className="about-tabs-number-inner-card">
            <div className="about-tabs-number-single-card">
              <p
              //   style={{
              //     background: fiterData?.number === 2 && "black",
              //     color: fiterData?.number === 2 && "#fff",
              //   }}
              >
                4
              </p>
              <span></span>
            </div>
            <p>Aug 2020</p>
          </div>
          <div className="about-tabs-number-inner-cards">
            <span>5</span>
            <p>Dec 2022</p>
          </div>
        </div>
      </div>
      {/* slider */}
      <SimpleSlider />
      <Whatwefocus
        leftSideTitleF="What we focus"
        leftSideTitleS="and strive for"
        rightSideFirstF="Enjoyable Construction Experience"
        rightSideFirstS="Best & Competitive Pricing"
        rightSideSecondF="Quality Assurance using our 470+ Quality Checks"
        rightSideSecondS="Payment to contractor only on completion of stage."
        rightSideThirdF="No Delays - Safety mechanisms against delays"
        rightSideThirdS="Transparent Contracts and Online monitoring"
      />
      <OurLeadership />
      <Investorswho />
      <Hirethebesthouse />
    </div>
  );
};

export default About;
