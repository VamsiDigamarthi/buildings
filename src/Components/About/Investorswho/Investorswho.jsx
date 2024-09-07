import React from "react";
import "./Investorswho.css";
import { PiParallelogramFill } from "react-icons/pi";
const inverterData = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/035/997/101/non_2x/ai-generated-portrait-of-smiling-happy-handsome-man-in-white-shirt-free-photo.jpg",
    name: "Aakash Goel",
    designation: "CEO, Trifecta Capital",
  },
  {
    image:
      "https://media.istockphoto.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=612x612&w=0&k=20&c=5NpgOqGdT-404agHoGsPdPTTQtVTppflZTiKKtUmxm0=",
    name: "Vishal Goel",
    designation: "Founder, XYZ Solutions",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/portrait-handsome-man-suit-men-s-beauty-fashion_900706-8366.jpg",
    name: "Ashutosh Goel",
    designation: "Founder, ABC Solutions",
  },
  {
    image:
      "https://media.istockphoto.com/id/180841365/photo/hes-a-handsome-man.jpg?s=612x612&w=0&k=20&c=vjQLLI8g_a0O6_xx0plUu3CJ9AMhnSzHssLwgem8gE4=",
    name: "Ramesh Goel",
    designation: "Founder, DEF Solutions",
  },
  {
    image:
      "https://st2.depositphotos.com/3272717/8196/i/950/depositphotos_81969316-stock-photo-fashion-man-in-suit.jpg",
    name: "Suresh Goel",
    designation: "Founder, GHI Solutions",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/035/997/101/non_2x/ai-generated-portrait-of-smiling-happy-handsome-man-in-white-shirt-free-photo.jpg",
    name: "Rohan Goel",
    designation: "Founder, JKL Solutions",
  },
];
const Investorswho = () => {
  return (
    <div className="about-invester-container">
      <div
        style={{
          alignItems: "flex-start",
        }}
        id="new-inverts-first-card"
        className="services-first-card "
      >
        <PiParallelogramFill
          style={{ marginTop: "10px" }}
          size={35}
          color="#ff6600"
        />
        <h1>
          Investors who <br />
          back our vision
        </h1>
      </div>
      <div className="about-invester-second-card">
        {inverterData?.map((each) => (
          <div className="about-invester-second-single-card">
            <img src={each.image} alt="" />
            <h4>{each.name}</h4>
            <p>{each.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investorswho;
