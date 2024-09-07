import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactThird from "./ContactThird/ContactThird";
const Contact = () => {
  return (
    <div className="contact-containe">
      <div className="contact-first-card">
        <div>
          <h1>Get in Touch With Our Technical Experts</h1>
          <p>
            We take our commitments to our users seriously. Reach us For any
            complaint or query.
          </p>
        </div>
        <div className="contact-blur-contact"></div>
      </div>
      <ContactForm />
      <ContactThird />
    </div>
  );
};

export default Contact;
