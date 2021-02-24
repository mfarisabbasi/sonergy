import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingPage/section1.css";

const SectionOne = () => {
  return (
    <div className="section1">
      <img
        src="https://res.cloudinary.com/dvwcygw04/image/upload/v1613736249/Sonergy/pexels-vivint-solar-2850347_w8sncs.webp"
        alt="sonergy"
      ></img>
      <div className="text-block">
        <h1>Think Smart, Think about Future</h1>
        <h4>Start Using Sonergy And Save More</h4>
        <br />
        <Link to="/contact-us">
          <span className="section1-btn">Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
