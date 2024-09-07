import React from "react";
import "./Hirethebesthouse.css";
import { ImHome } from "react-icons/im";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
const Hirethebesthouse = () => {
  return (
    <div className="hire-best-container">
      <div className="hire-best-first-card">
        <h1>Hire the best house</h1>
        <h1>construction service</h1>
        <div className="hire-best-numberpcard">
          <div className="hire-best-number-single0card">
            <div>
              <ImHome size={20} color="#ff6600" />
              <p>4500+</p>
            </div>
            <p>Homes</p>
          </div>
          <div className="hire-best-number-single0card">
            <div>
              <IoMdCheckmarkCircle size={20} color="#ff6600" />
              <p>470+</p>
            </div>
            <p>Quality Checking</p>
          </div>
          <div className="hire-best-number-single0cards">
            <div>
              <RiMoneyRupeeCircleFill size={20} color="#ff6600" />
              <p>100%</p>
            </div>
            <p>Safe Money Transaction</p>
          </div>
        </div>
        <div className="construct-lets-build-btn-card">
          <button>Let's Build</button>
          <TiArrowRight size={25} color="#fff" />
        </div>
      </div>
      <img
        src="/images/three-dimensional-house-model_23-2151003972-removebg-preview.png"
        alt=""
      />
    </div>
  );
};

export default Hirethebesthouse;
