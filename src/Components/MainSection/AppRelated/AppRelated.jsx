import React from "react";
import "./AppRelated.css";
import { PiParallelogramFill } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
const AppRelated = ({ borderStyle }) => {
  return (
    <div className="app-related-container">
      <div
        className={` ${
          borderStyle === "bottom"
            ? "app-related-border-bottom"
            : "app-related-border-top"
        }`}
      >
        <div className="app-related-first-card">
          <PiParallelogramFill size={55} color="#ff6600" />
          <div className="app-related-first-inner-card">
            <h1>We construct your dream home. You track progress on app.</h1>
            <p>
              Track house construction project progress, raise queries, view
              inspection reports and more.
            </p>
            <div className="app-related-list-item">
              <SiTicktick size={20} color="#ff6600" />
              <p>View packages, floor plans, design recommendations</p>
            </div>
            <div className="app-related-list-item">
              <SiTicktick size={20} color="#ff6600" />
              <p>Capture house construction progress in 3D</p>
            </div>
            <div className="app-related-list-item">
              <SiTicktick size={20} color="#ff6600" />
              <p>Realtime tracking until project completion</p>
            </div>
          </div>
        </div>
        <img
          src="https://www.bricknbolt.com/assets/images/offerLandingPageBanner.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AppRelated;
