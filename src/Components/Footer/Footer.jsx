import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-first-card">
        <h2>Site Map</h2>
        <p>How it Works</p>
        <p>Our Projects</p>
        <p>Luxury Projects</p>
        <p>Cost Estimator</p>
        <p>Material Estimator</p>
        <p>Floor Plans</p>
        <p>About Us</p>
        <p>Blogs and Articles</p>
        <p>Careers</p>
      </div>
      <div className="footer-second-card">
        <div>
          <h2>Others</h2>
          <p>Join us as a professional</p>
          <p>Refer a Friend</p>
          <p>Refer a Friend</p>
        </div>
        <div>
          <h2>Information</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
          <p>Cancellation Policy</p>
          <p>Referral Policy</p>
        </div>
      </div>
      <div className="footer-third-card">
        <h2>Brick&Bolt Construction for Business</h2>
        <h2>Brick&Bolt Building Materials</h2>
        <div>
          <h3>Get in Touch</h3>
          <div>
            <h3>+91 0000000000</h3>
            <h3>test@test.com</h3>
          </div>
        </div>
        <div className="footer-icons">
          <FaTwitter size={25} />
          <FaFacebookF size={25} />
          <FaLinkedin size={25} />
        </div>
        <div className="footer-stoies-card">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
