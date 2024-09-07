import React from "react";
import "./ReferralProgram.css";
import { PiParallelogramFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
const ReferralProgram = () => {
  return (
    <div className="referral-program-container">
      <div className="referral-program-first-card">
        <div className="referral-program-icons-card">
          <PiParallelogramFill size={30} color="#ff6600" />
          <h1>Referral Program</h1>
        </div>
        <p>
          Refer your friends & family looking for house construction and earn
          cashbacks/discounts* upto 25,000 INR today
        </p>
        <div className="construct-lets-build-btn-card">
          <button>Let's Build</button>
          <TiArrowRight size={25} color="#fff" />
        </div>
      </div>
      <img
        src="https://www.bricknbolt.com/assets/images/illustrations/refer.svg"
        alt=""
      />
    </div>
  );
};

export default ReferralProgram;
