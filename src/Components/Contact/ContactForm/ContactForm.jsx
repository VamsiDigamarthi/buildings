import React from "react";
import "./ContactForm.css";
import { TiArrowRight } from "react-icons/ti";
const ContactForm = () => {
  return (
    <div className="contact-form-main-container">
      <div className="contact-form-main-inner-card">
        <div className="contact-form-main-inner-single-card">
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
        </div>
        <div className="contact-form-main-inner-single-card">
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email</span>
            </div>
          </div>
          <div>
            <div className="inputBox">
              <select>
                <option value="Select">Construction Request</option>
                <option value="Option1">Complaint</option>
                <option value="Option2">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="contact-form-main-inner-single-card">
          <div className="inputBox contact-form-main-inner-single-div">
            {/* <input type="text" required /> */}
            <textarea rows="4" cols="50" required />
            <span>Enquiry</span>
          </div>
        </div>
        <div className="contact-form-btn-card-mian">
          <div>
            <p>By submitting this form, you agree to the</p>
            <p>
              <span>privacy policy</span> & <span>terms and conditions</span>
            </p>
          </div>
          <div className="contact-btn-card-kjhgfc">
            <button>submit</button>
            <TiArrowRight size={25} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
