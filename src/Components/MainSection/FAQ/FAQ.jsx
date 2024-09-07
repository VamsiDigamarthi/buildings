import React, { useState } from "react";
import "./faqs.css";
import { IoIosArrowDown } from "react-icons/io";
const FAQ = () => {
  const [openFaq, setOpenFaq] = useState({
    first: true,
    second: true,
    third: true,
  });

  console.log(openFaq.first);

  const onThirdClick = () => {
    setOpenFaq({ ...openFaq, third: !openFaq.third });
  };

  const onSecondClick = () => {
    setOpenFaq({ ...openFaq, second: !openFaq.second });
  };

  const onFirstClick = () => {
    setOpenFaq({ ...openFaq, first: !openFaq.first });
  };

  return (
    <div className="faq-container">
      <h3>Faqs</h3>
      <div className="faq-inner-card">
        <div className="faq-inner-inner-card">
          <div onClick={onFirstClick}>
            <span>
              <IoIosArrowDown
                size={20}
                color="grey"
                style={{
                  color: openFaq.first && "#ff6600",
                }}
              />
            </span>
            <p
              style={{
                color: openFaq.first && "#ff6600",
              }}
            >
              Does Brick&Bolt businesses charge an advance payment?
            </p>
          </div>
          {openFaq.first && (
            <p>
              Yes. Brick&Bolt collects a booking amount of about 2% of the total
              home construction cost. Alongside this, we conduct digital
              surveys, perform soil tests, and create a floor plan.
            </p>
          )}
        </div>
        <div className="faq-inner-inner-card">
          <div onClick={onSecondClick}>
            <span>
              <IoIosArrowDown
                size={20}
                color="grey"
                style={{
                  color: openFaq.second && "#ff6600",
                }}
              />
            </span>
            <p
              style={{
                color: openFaq.second && "#ff6600",
              }}
            >
              What is the estimated time it will take to build a full house?
            </p>
          </div>
          {openFaq.second && (
            <p>
              It takes 6 to 14 months to complete a house construction project.
              Generally, a 5-month period to build the first floor and 1.5
              months for each one after that is the standard. However, this
              depends on the space, built-up area, locations, design,
              construction type (foundation or core), etc. You can track your
              project, including updates, inspection reports, payment schedules,
              etc., on the customer app.
            </p>
          )}
        </div>
        <div className="faq-inner-inner-card">
          <div onClick={onThirdClick}>
            <span>
              <IoIosArrowDown
                size={20}
                color="grey"
                style={{
                  color: openFaq.third && "#ff6600",
                }}
              />
            </span>
            <p
              style={{
                color: openFaq.third && "#ff6600",
              }}
            >
              Do I have to pay the full amount before the project starts?
            </p>
          </div>
          {openFaq.third && (
            <p>
              No. You will have to pay different amounts based on the
              personalised payment schedule curated based on the construction
              stages of your project. We charge a 2% booking amount. 8% of the
              total amount is collected once the floor plan is finalised. Our
              construction company then moves forward with structural drawings,
              MEP drawings, 3D elevation drawings, and the initiation of
              contractor allocation. After the completion of the design phase,
              the finalised product is handed over to the project management
              team. This is where you have to pay 15% of the project value until
              the plinth is constructed. From here on, the remaining payment
              will be based on stages specific to the project.{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
