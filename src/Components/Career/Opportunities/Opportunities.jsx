import React from "react";
import "./Opportunities.css";
import { PiParallelogramFill } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
const Opportunities = () => {
  return (
    <div className="career-opportunities-container">
      <div className="services-first-card" id="career-heading-card">
        <PiParallelogramFill size={35} color="#ff6600" />
        <h1>Opportunities with us</h1>
      </div>
      <div className="career-second-card">
        <div className="career-second-inner-card">
          <div className="career-second-inner-single0card">
            <div className="career-seocnd-inner-inner-card">
              <h3>Lead Outside Sales</h3>
              <p>Hyderbad 2+ years experience</p>
            </div>
            <FaAngleRight size={20} color="#ff6600" />
          </div>
          <div className="career-second-inner-single0card">
            <div className="career-seocnd-inner-inner-card">
              <h3>Director Marketing </h3>
              <p>Hyderbad 2+ years experience</p>
            </div>
            <FaAngleRight size={20} color="#ff6600" />
          </div>
          <div className="career-second-inner-single0card">
            <div className="career-seocnd-inner-inner-card">
              <h3>Lead Inside Sales</h3>
              <p>Hyderbad 2+ years experience</p>
            </div>
            <FaAngleRight size={20} color="#ff6600" />
          </div>
          <div className="career-second-inner-single0card">
            <div className="career-seocnd-inner-inner-card">
              <h3>Project Manager</h3>
              <p>Hyderbad 2+ years experience</p>
            </div>
            <FaAngleRight size={20} color="#ff6600" />
          </div>
          <div className="career-second-inner-single0card">
            <div className="career-seocnd-inner-inner-card">
              <h3>Backend Developer</h3>
              <p>Hyderbad 2+ years experience</p>
            </div>
            <FaAngleRight size={20} color="#ff6600" />
          </div>
          <div className="career-second-inner-single0card">
            <div className="career-seocnd-inner-inner-card">
              <h3>Front End Developer</h3>
              <p>Hyderbad 2+ years experience</p>
            </div>
            <FaAngleRight size={20} color="#ff6600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
