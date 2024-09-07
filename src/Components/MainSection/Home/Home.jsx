import React from "react";
import "./Home.css";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
const Home = () => {
  return (
    <div className="home-main-card">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-modern-luxury-house-with-garage-in-australia-a-stunning-3d-rendering-image_3632578.jpg"
        alt=""
      />
      <div className="hero-black-card">
        <h2>Construct Your</h2>
        <h2>Dream Home</h2>
        <span>
          Step into the home you've always dreamed of built with the highest
          quality standard
        </span>
        <div className="hero-black-inner-card">
          <div>
            <MdOutlineMapsHomeWork size={30} />
            <div>
              <h4>3403</h4>
              <span>Homes</span>
            </div>
          </div>
          <div>
            <MdOutlineMapsHomeWork size={30} />
            <div>
              <h4>403+</h4>
              <span>Quality checks</span>
            </div>
          </div>
          <div>
            <MdOutlineMapsHomeWork size={30} />
            <div>
              <h4>3403+</h4>
              <span>Customisable</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-contact-card">
        <span>Talk to our Expert</span>
        <div className="hero-form-card">
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Name</span>
            </div>
          </div>
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
          </div>
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email</span>
            </div>
          </div>
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Offer Code</span>
            </div>
          </div>
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Location of your plot</span>
            </div>
          </div>
          <div className="form-btn-card">
            <button>Book free Consultation</button>
            <TiArrowRight size={30} />
          </div>
          <span>
            By submitting this form I confirm that I have read and agreed to
            accept sdvvl <span>privacy policy</span>
          </span>
        </div>
      </div>
      {/* blog related post */}
      <div className="hero-blog-related-post">
        <div className="hero-blog-first-card">
          <img
            src="https://www.transparentpng.com/download/sri-ganesh/lord-ganesh-png-picture-with-transparent-clipart-9.png"
            alt=""
          />
          <div>
            <h3>Happy Ganesh Chaturthi</h3>
            <span>
              get upto <span> 4 lacks </span> off
            </span>
            <span>Limited Period Offers</span>
            <span>T&C Apply</span>
          </div>
        </div>
        <div className="hero-blog-second-card"></div>
      </div>
    </div>
  );
};

export default Home;
