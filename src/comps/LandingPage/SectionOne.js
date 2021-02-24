import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingPage/section1.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionOne = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="section1">
      <img
        src="https://res.cloudinary.com/dvwcygw04/image/upload/v1613736249/Sonergy/pexels-vivint-solar-2850347_w8sncs.webp"
        alt="sonergy"
      ></img>
      <div
        data-aos-duration="1000"
        data-aos="fade-right"
        className="text-block"
      >
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
