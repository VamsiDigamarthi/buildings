import React, { useState } from "react";
import "./DetailOurProject.css";
import { PiParallelogramFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import AppRelated from "../MainSection/AppRelated/AppRelated";
import Hirethebesthouse from "../MainSection/Hirethebesthouse/Hirethebesthouse";
const detailsOurProject = [
  {
    id: "completed",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/Paris_Exterior_4-Edit-e1714649473120.png",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://goodhomes.wwmindia.com/content/2022/may/think-design-21653902617.jpg",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
  {
    id: "active",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s",
    title: "CRH987658",
    location: "Delhi",
    square_feet: "6500 Sqft",
    contact: "G + 3",
    style: "Modern",
  },
  {
    id: "completed",
    image:
      "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_640.jpg",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
  {
    id: "active",
    image:
      "https://i0.wp.com/samhouseplans.com/wp-content/uploads/2021/07/House-design-12x11-M-with-4-Bedrooms-Pdf-Full-Plan-front-view-scaled.jpg?fit=2560%2C1440&ssl=1",
    title: "CRH987658",
    location: "Delhi",
    square_feet: "6500 Sqft",
    contact: "G + 3",
    style: "Modern",
  },
  {
    id: "completed",
    image:
      "https://i.pinimg.com/564x/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://cdn.houseplansservices.com/product/o3rhmk1de3f7bc8gmi66ov68ut/w620x413.jpg?v=2",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
  {
    id: "active",
    image:
      "https://homezonline.in/wp-content/uploads/2022/07/Simplex-single-floor-home.jpg",
    title: "CRH987658",
    location: "Delhi",
    square_feet: "6500 Sqft",
    contact: "G + 3",
    style: "Modern",
  },
  {
    id: "completed",
    image:
      "https://www.jkcement.com/wp-content/uploads/2023/09/street-england-with-typical-houses-scaled.jpg",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://thumbs.dreamstime.com/b/modern-home-pool-patio-beautiful-house-landscaping-sunny-day-316837822.jpg",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
  {
    id: "active",
    image:
      "https://samasthiticonstructions.com/wp-content/uploads/2023/12/Copy-of-N11-scaled.jpg",
    title: "CRH987658",
    location: "Delhi",
    square_feet: "6500 Sqft",
    contact: "G + 3",
    style: "Modern",
  },
  {
    id: "completed",
    image:
      "https://cdn.houseplansservices.com/product/o3rhmk1de3f7bc8gmi66ov68ut/w620x413.jpg?v=2",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/sites/jennifercook/2021/05/25/the-modern-house-in-the-world-with-its-unique-design-and-the-world-s-first-modern-house-in-the-us-01.jpg?crop=0%2C155%2C1000%2C567&resize=960%2C423",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
  {
    id: "active",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/sites/jennifercook/2021/05/25/the-modern-house-in-the-world-with-its-unique-design-and-the-world-s-first-modern-house-in-the-us-01.jpg?crop=0%2C155%2C1000%2C567&resize=960%2C423",
    title: "CRH987658",
    location: "Delhi",
    square_feet: "6500 Sqft",
    contact: "G + 3",
    style: "Modern",
  },
  {
    id: "completed",
    image:
      "https://nammafamilybuilder.com/wp-content/uploads/2023/04/yuvaraj_11zon.jpg",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202209/20-exterior-house-designs/title-exterior-house-design.jpg",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
  {
    id: "active",
    image:
      "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202209/20-exterior-house-designs/title-exterior-house-design.jpg",
    title: "CRH987658",
    location: "Delhi",
    square_feet: "6500 Sqft",
    contact: "G + 3",
    style: "Modern",
  },
  {
    id: "completed",
    image:
      "https://www.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg",
    title: "CRH987656",
    location: "Hyderabad",
    square_feet: "4300 Sqft",
    contact: "G + 1",
    style: "Classic",
  },
  {
    id: "near-completion",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/sites/jennifercook/2021/05/25/the-modern-house-in-the-world-with-its-unique-design-and-the-world-s-first-modern-house-in-the-us-01.jpg?crop=0%2C155%2C1000%2C567&resize=960%2C423",
    title: "CRH987657",
    location: "Mumbai",
    square_feet: "5400 Sqft",
    contact: "G + 2",
    style: "Modern",
  },
];
const DetailOurProject = () => {
  const borderStyle = "bottom";
  const [displayItemData, setdisplayItemData] = useState(
    detailsOurProject.filter((each) => each.id === "completed")
  );
  const [tabData, setTabData] = useState("completed");
  const handleTabClick = (id) => {
    setTabData(id);
    setdisplayItemData(detailsOurProject.filter((each) => each.id === id));
  };

  return (
    <div className="detail-our-projects-main-card">
      <div className="detail-our-projects">
        <div className="services-first-card">
          <PiParallelogramFill size={35} color="#ff6600" />
          <h1>Our Projects</h1>
        </div>
        <p>Explore how our work has changed the life of our customers.</p>
        <div className="detail-our-projects-tabs">
          <p
            style={{
              borderBottom: tabData === "completed" && "2px solid #ff6600",
            }}
            onClick={() => handleTabClick("completed")}
          >
            COMPLETED
          </p>
          <p
            style={{
              borderBottom:
                tabData === "near-completion" && "2px solid #ff6600",
            }}
            onClick={() => handleTabClick("near-completion")}
          >
            NEAR COMPLETION
          </p>
          <p
            style={{
              borderBottom: tabData === "active" && "2px solid #ff6600",
            }}
            onClick={() => handleTabClick("active")}
          >
            ACTIVE
          </p>
        </div>
        <div className="details-our-project-tab-click-main-card">
          {displayItemData?.map((each) => (
            <div className="details-our-project-tab-click-main-single-card">
              <img src={each.image} alt="" />
              <div className="details-our-project-tab-text-card">
                <h3>{each.title}</h3>
                <p>{each.location}</p>
                <hr />
                <div>
                  <span>{each.square_feet}</span>
                  <span>{each.contact}</span>
                  <span>{each.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="detail-our-project-contact-page">
        <div className="detail-our-project-contact-inner-card">
          <h1>Talk to our Expert</h1>
          <div className="detail-our-project-contact-input-main-card">
            <div>
              <div className="inputBox">
                <input type="text" required />
                <span>Name</span>
              </div>
            </div>
            <div>
              <div className="inputBox">
                <input type="text" required />
                <span>Mobile</span>
              </div>
            </div>
          </div>
          <div className="detail-our-project-contact-input-main-card">
            <div>
              <div className="inputBox">
                <input type="text" required />
                <span>Email</span>
              </div>
            </div>
            <div>
              <div className="inputBox">
                <input type="text" required />
                <span>Location of your plot</span>
              </div>
            </div>
          </div>
          <div className="detail-our-project-btn-card">
            <div className="construct-lets-build-btn-card ">
              <button>Submit</button>
              <TiArrowRight size={25} color="#fff" />
            </div>
          </div>
          <p>
            *By submitting this form, I confirm that I have read and agreed to
            accept Brick&Bolt's{" "}
            <Link to="/" className="link-style">
              privacy policy
            </Link>
          </p>
        </div>
      </div>
      <AppRelated borderStyle={borderStyle} />
      <Hirethebesthouse />
    </div>
  );
};

export default DetailOurProject;
