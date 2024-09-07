import React from "react";
import "./BankPatners.css";
import { PiParallelogramFill } from "react-icons/pi";
const BankPatners = () => {
  return (
    <div className="bank-partneer-container">
      <div className="referral-program-icons-card">
        <PiParallelogramFill size={30} color="#ff6600" />
        <h1>Our Banking Partners</h1>
      </div>
      <p>Helping customers get easy access of home construction loans</p>
      <div className="bank-referral-images-card">
        <img
          src="https://www.bricknbolt.com/assets/images/partners/HDFC%20Ltd%20Logo.jpg"
          alt=""
        />
        <img
          src="https://www.bricknbolt.com/assets/images/partners/HDFC%20Ltd%20Logo.jpg"
          alt=""
        />
        <img
          src="https://www.bricknbolt.com/assets/images/partners/HDFC%20Ltd%20Logo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BankPatners;
