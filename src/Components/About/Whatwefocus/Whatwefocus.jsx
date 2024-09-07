import React from "react";
import { PiParallelogramFill } from "react-icons/pi";
import "./Whatwefocus.css";
import { FaFaceSmileWink } from "react-icons/fa6";
import { TbCoinRupee } from "react-icons/tb";
const Whatwefocus = ({
  leftSideTitleF,
  leftSideTitleS,
  leftSidePara,
  rightSideFirstF,
  rightSideFirstS,
  rightSideSecondF,
  rightSideSecondS,
  rightSideThirdF,
  rightSideThirdS,
}) => {
  return (
    <div className="about-what-we-focus">
      <div
        className="services-first-card"
        style={{
          alignItems: "flex-start",
        }}
      >
        <PiParallelogramFill
          style={{
            marginTop: "10px",
          }}
          size={35}
          color="#ff6600"
        />
        <h1>
          {leftSideTitleF} <br /> {leftSideTitleS}
        </h1>
      </div>
      {/* <p>{leftSidePara}</p> */}
      <div className="about-what-we-right-side-main-card">
        <div className="about-what-we-right-inner-card">
          <div>
            <FaFaceSmileWink size={30} color="#ff6600" />
            <p>{rightSideFirstF}</p>
          </div>
          <div>
            <TbCoinRupee size={30} color="#ff6600" />
            <p>{rightSideFirstS}</p>
          </div>
        </div>
        <div className="about-what-we-right-inner-card">
          <div>
            <FaFaceSmileWink size={30} color="#ff6600" />
            <p>{rightSideSecondF}</p>
          </div>
          <div>
            <TbCoinRupee size={30} color="#ff6600" />
            <p>{rightSideSecondS}</p>
          </div>
        </div>
        <div className="about-what-we-right-inner-card">
          <div>
            <FaFaceSmileWink size={30} color="#ff6600" />
            <p>{rightSideThirdF}</p>
          </div>
          <div>
            <TbCoinRupee size={30} color="#ff6600" />
            <p>{rightSideThirdS}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwefocus;
