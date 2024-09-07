import React from "react";
import "./ContactThird.css";
import { PiParallelogramFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
const ContactThird = () => {
  return (
    <div className="contact-third-container">
      <div className="contact-third-first-card">
        <div
          style={{
            alignItems: "flex-start",
            gap: "1rem",
          }}
          className="services-first-card"
          id="contact-h1-style"
        >
          <PiParallelogramFill
            style={{
              marginTop: "10px",
            }}
            size={45}
            color="#ff6600"
          />
          <h1>
            We are here to <br />
            answer your all <br />
            questions
          </h1>
        </div>
        <div className="contact-third-first-second-card">
          <div className="contact-third-first-second-single-card">
            <p>Email Us On</p>
            <div className="contact-third-first-second-single-inner-side">
              <span></span>
              <div>
                <p>Customer Support</p>
                <span>customer@test.com</span>
              </div>
            </div>
            <div className="contact-third-first-second-single-inner-side">
              <span></span>
              <div>
                <p>Career Opportunities</p>
                <span>career@test.com</span>
              </div>
            </div>
            <div className="contact-third-first-second-single-inner-side">
              <span></span>
              <div>
                <p>Join as a Contractor or Architect</p>
                <span>joincontractor@test.com</span>
              </div>
            </div>
            <div className="contact-third-first-second-single-inner-side">
              <span></span>
              <div>
                <p>General Queries & Information</p>
                <span>general@test.com</span>
              </div>
            </div>
          </div>
          <div className="contact-third-first-second-single-card">
            <p>Talk To Us</p>
            <div className="contact-third-first-second-single-inner-side">
              <span></span>
              <div>
                <p>Contact Number (also available on whatsapp)</p>
                <span>91 9000000000</span>
              </div>
            </div>
            <div className="contact-third-first-second-single-inner-side">
              <span></span>
              <div>
                <p>Timings</p>
                <span>Mon - Sat, 10 am to 6 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-third-second-card">
        <p>Office Address</p>
        <div className="contact-third-second-inner--card">
          <div className="contact-third-second-inner-single-card">
            <div className="const-third-second-inner-single-card-firysn">
              <span></span>
              <div>
                <p>Bengaluru, India</p>
                <span>
                  Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) Urban Vault
                  Koramangala 57, 60 Feet Rd, KHB Colony, 6th Block,
                  Koramangala, Bengaluru,Karnataka 560095
                </span>
              </div>
            </div>
            <div>
              <IoLocationOutline size={20} color="#ff6600" />
              <span>Hyderabad</span>
            </div>
          </div>
          <div className="contact-third-second-inner-single-card">
            <div className="const-third-second-inner-single-card-firysn">
              <span></span>
              <div>
                <p>Bengaluru, India</p>
                <span>
                  Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) Urban Vault
                  Koramangala 57, 60 Feet Rd, KHB Colony, 6th Block,
                  Koramangala, Bengaluru,Karnataka 560095
                </span>
              </div>
            </div>
            <div>
              <IoLocationOutline size={20} color="#ff6600" />
              <span>Hyderabad</span>
            </div>
          </div>
          <div className="contact-third-second-inner-single-card">
            <div className="const-third-second-inner-single-card-firysn">
              <span></span>
              <div>
                <p>Bengaluru, India</p>
                <span>
                  Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) Urban Vault
                  Koramangala 57, 60 Feet Rd, KHB Colony, 6th Block,
                  Koramangala, Bengaluru,Karnataka 560095
                </span>
              </div>
            </div>
            <div>
              <IoLocationOutline size={20} color="#ff6600" />
              <span>Hyderabad</span>
            </div>
          </div>
          <div className="contact-third-second-inner-single-card">
            <div className="const-third-second-inner-single-card-firysn">
              <span></span>
              <div>
                <p>Bengaluru, India</p>
                <span>
                  Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) Urban Vault
                  Koramangala 57, 60 Feet Rd, KHB Colony, 6th Block,
                  Koramangala, Bengaluru,Karnataka 560095
                </span>
              </div>
            </div>
            <div>
              <IoLocationOutline size={20} color="#ff6600" />
              <span>Hyderabad</span>
            </div>
          </div>
          <div className="contact-third-second-inner-single-card">
            <div className="const-third-second-inner-single-card-firysn">
              <span></span>
              <div>
                <p>Bengaluru, India</p>
                <span>
                  Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) Urban Vault
                  Koramangala 57, 60 Feet Rd, KHB Colony, 6th Block,
                  Koramangala, Bengaluru,Karnataka 560095
                </span>
              </div>
            </div>
            <div>
              <IoLocationOutline size={20} color="#ff6600" />
              <span>Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactThird;
