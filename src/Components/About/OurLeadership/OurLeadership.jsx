import React from "react";
import "./OurLeadership.css";
import { FaLinkedin } from "react-icons/fa";
const OurLeadership = () => {
  return (
    <div className="about-our-leaders-container">
      <div className="about-our-leaders-first-card">
        <h1>Our Leadership</h1>{" "}
        <p>
          We began from a small team, but now we are a force of 100+ visionaries
          who believe in our mission
        </p>
      </div>
      <div className="about-our-leaders-second-card">
        <div className="about-our-leader-second-firsr-card">
          <img
            src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h3>Jayesh Rajpurohit</h3>
          <p>Co-Founder and CEO</p>
          <FaLinkedin />
        </div>
        <div className="about-our-leader-second-firsr-card">
          <img
            src="https://media.istockphoto.com/id/1311078906/photo/portrait-of-handsome-young-man-wearing-sunglasses-and-white-tshirt-posing-on-city-street.jpg?s=612x612&w=0&k=20&c=VJnG1hCQ5TLLvRFyQpwzQd7kUFqgfmKaJ1g2E7oYmTA="
            alt=""
          />
          <h3>Arpit Rajpurohit</h3>
          <p>Co-Founder</p>
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default OurLeadership;
