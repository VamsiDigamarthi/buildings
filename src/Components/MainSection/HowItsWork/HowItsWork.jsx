import React, { useState } from "react";
import "./HowItsWork.css";
import { PiParallelogramFill } from "react-icons/pi";

const howItsWord = [
  {
    number: 1,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/308/330/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
    title: "05 Track & Transact",
    subTitle:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
  {
    number: 2,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    title: "05 Track & Transact",
    subTitle:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
];

const HowItsWork = () => {
  const [fiterData, setFilterData] = useState(howItsWord[0]);

  const onTabClick = (number) => {
    const filterDatass = howItsWord.filter((each) => each.number === number);
    setFilterData(filterDatass[0]);
  };

  console.log(fiterData);

  return (
    <div className="how-its-word-containe">
      <div className="how-its-work-first-card">
        <PiParallelogramFill size={30} color="#ff6600" />
        <h1>How it works</h1>
        <PiParallelogramFill size={30} color="#ff6600" />
      </div>
      <p>
        Our house construction steps are simple and easy to understand: Plan -
        Build - Track
      </p>
      <p>- Settle in.</p>
      <div className="how-its-word-tabs-card">
        <div className="how-its-work-tabs-number-inner-card">
          <div
            onClick={() => onTabClick(1)}
            className="how-its-work-tabs-number-single-card"
          >
            <p
              style={{
                background: fiterData?.number === 1 && "black",
                color: fiterData?.number === 1 && "#fff",
              }}
            >
              1
            </p>
            <span></span>
          </div>
          <p>Raise a Request</p>
        </div>
        <div className="how-its-work-tabs-number-inner-card">
          <div
            onClick={() => onTabClick(2)}
            className="how-its-work-tabs-number-single-card"
          >
            <p
              style={{
                background: fiterData?.number === 2 && "black",
                color: fiterData?.number === 2 && "#fff",
              }}
            >
              2
            </p>
            <span></span>
          </div>
          <p>Meet our Expert</p>
        </div>
        <div className="how-its-work-tabs-number-inner-card">
          <div className="how-its-work-tabs-number-single-card">
            <p>3</p>
            <span></span>
          </div>
          <p>Book with Us</p>
        </div>
        <div className="how-its-work-tabs-number-inner-card">
          <div className="how-its-work-tabs-number-single-card">
            <p>4</p>
            <span></span>
          </div>
          <p>Receive Designs</p>
        </div>
        <div className="how-its-work-tabs-number-inner-card">
          <div className="how-its-work-tabs-number-single-card">
            <p>5</p>
            <span></span>
          </div>
          <p>Track & Transact</p>
        </div>
        <div className="how-its-work-tabs-number-inner-cards">
          <span>6</span>
          <p>Settle In</p>
        </div>
      </div>
      <div className="how-its-work-tab-image">
        <img src={fiterData?.image} alt="" />
      </div>
      <div className="how-its-work-tabs-text-card">
        <h3>{fiterData?.title}</h3>

        <p>{fiterData?.subTitle}</p>
      </div>
    </div>
  );
};

export default HowItsWork;
