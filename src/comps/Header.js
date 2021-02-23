import React, { useEffect, useState } from "react";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/header.css";

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);

  const navSlide = (e) => {
    e.preventDefault();

    const nav = document.querySelector(".navbar-links");

    if (!navOpened) {
      nav.classList.toggle("navbar-active");
      setNavOpened(true);
    }
    if (navOpened === true) {
      nav.classList.remove("navbar-active");
      setNavOpened(false);
    }
  };

  useEffect(() => {
    if (navOpened) {
      var prevScrollPos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        const nav = document.querySelector(".navbar-links");
        if (prevScrollPos > currentScrollPos) {
          return 1;
        } else {
          nav.classList.remove("navbar-active");
          setNavOpened(false);
        }
        prevScrollPos = currentScrollPos;
      };
    }
  }, [navOpened]);

  return (
    <Container fluid>
      <nav>
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dvwcygw04/image/upload/v1613673945/Sonergy/logo_hssbmk.webp"
            alt="sonergy"
          ></img>
        </div>
        <ul className="navbar-links">
          <li>
            <LinkContainer to="/">
              <p>Home</p>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/about-us">
              <p>About Us</p>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/led">
              <p>LED</p>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/contact-us">
              <p>Contact Us</p>
            </LinkContainer>
          </li>
        </ul>
        <div className="navbar-btn">Get A Free Quote</div>
        <div onClick={navSlide} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
