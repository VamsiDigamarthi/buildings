import React, { useState } from "react";
import "./Header.css";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
export default function Header() {
  const [sibeOpen, setSideOpen] = useState(false);
  return (
    <header>
      <nav className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.bricknbolt.com/assets/images/logo/Logo_Home.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="header-mobile-card">
          {sibeOpen ? (
            <RxCross2 onClick={() => setSideOpen(false)} size={30} />
          ) : (
            <RxHamburgerMenu onClick={() => setSideOpen(true)} size={30} />
          )}
        </div>
        <ul className="nav-ul">
          <li>
            <Dropdown
              data={[
                {
                  text: "Hyderabad",
                  link: "/",
                },
                {
                  text: "Hyderabad",
                  link: "/",
                },
                {
                  text: "Hyderabad",
                  link: "/",
                },
              ]}
            />
          </li>

          <li>
            <Link to="/our-projects">Our Projects</Link>
          </li>
          <li>
            {/* <LinkWithtag link="/" text="Floor Plans" tag="New!" /> */}
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <button className="header-btn">LET'S BUILD</button>
            {/* <Dropdown
              data={[
                {
                  text: "Hyderabad",
                  link: "/",
                },
                {
                  text: "Hyderabad",
                  link: "/",
                },
                {
                  text: "Hyderabad",
                  link: "/",
                },
              ]}
            /> */}
          </li>
          <li>
            <div className="header-contact-number-card">
              <span>
                <FaPhoneAlt size={20} color="#fff" />
              </span>
            </div>
          </li>
        </ul>
        {/* mobile */}
        {sibeOpen && (
          <ul className="nav-ul-mobile">
            <li>
              <Dropdown
                data={[
                  {
                    text: "Hyderabad",
                    link: "/",
                  },
                  {
                    text: "Hyderabad",
                    link: "/",
                  },
                  {
                    text: "Hyderabad",
                    link: "/",
                  },
                ]}
              />
            </li>

            <li onClick={() => setSideOpen(false)}>
              <Link to="/our-projects">Our Projects</Link>
            </li>
            <li onClick={() => setSideOpen(false)}>
              {/* <LinkWithtag link="/" text="Floor Plans" tag="New!" /> */}
              <Link to="/about-us">About Us</Link>
            </li>
            <li onClick={() => setSideOpen(false)}>
              <Link to="/career">Career</Link>
            </li>
            <li onClick={() => setSideOpen(false)}>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <button className="header-btn">LET'S BUILD</button>
              {/* <Dropdown
              data={[
                {
                  text: "Hyderabad",
                  link: "/",
                },
                {
                  text: "Hyderabad",
                  link: "/",
                },
                {
                  text: "Hyderabad",
                  link: "/",
                },
              ]}
            /> */}
            </li>
            <li>
              <div className="header-contact-number-card">
                <span>
                  <FaPhoneAlt size={20} color="#fff" />
                </span>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

function Dropdown({ data }) {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        <span>{data[0].text}</span> <IoChevronDown />
      </button>
      <div class="dropdown-content">
        {data.map((e, index) => {
          return (
            <Link to={e.link} key={index}>
              {e.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function LinkWithtag({ link, text, tag }) {
  return (
    <div className="link-with-tag">
      <span>{tag}</span>
      <Link to={link}>{text}</Link>
    </div>
  );
}
