import React from "react";
import "./Services.css";
import { PiParallelogramFill } from "react-icons/pi";
const Services = () => {
  return (
    <div className="services-main-card">
      <div className="services-first-card">
        <PiParallelogramFill size={35} color="#ff6600" />
        <h1>Our Services</h1>
      </div>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
      <div className="services-image-card">
        <div className="services-single-image-card">
          <img
            className="services-single-image-inner-card"
            src="https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg"
            alt=""
          />
          <span></span>
          <h3 className="service-single-inner-h3-tag">House Construction</h3>
        </div>
        <div className="services-single-image-card">
          <img
            className="services-single-image-inner-card"
            src="https://images.alphacoders.com/435/435117.jpg"
            alt=""
          />
          <span></span>
          <h3 className="service-single-inner-h3-tag">
            Construction for Buniness
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
