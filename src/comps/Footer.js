import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/footer.css";

const Footer = () => {
  return (
    <Container fluid>
      <div className="footer">
        <div className="footer-top">
          <Row>
            <Col className="text-center" xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="footer-logo">
                <img
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1613673945/Sonergy/logo_hssbmk.webp"
                  alt="sonergy"
                ></img>
              </div>
              <div className="footer-social">
                <span>
                  <i className="fab fa-facebook"></i>
                </span>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  <i className="fab fa-linkedin"></i>
                </span>
                <span>
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </Col>
            <Col
              className="text-center text-lg-left text-xl-left"
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
            >
              <div className="footer-useful">
                <h5>USEFUL LINKS</h5>
                <span>______</span>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Solar Solutions</li>
                  <li>LED Lighting</li>
                </ul>
              </div>
            </Col>
            <Col
              className="text-center text-lg-left text-xl-left"
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
            >
              <div className="footer-useful2">
                <h5>Contact Details</h5>
                <span>______</span>
                <h6>Phone & Email</h6>
                <p>
                  +324-123-45-978
                  <br /> supportteam@wireman.com
                </p>
                <h6>Working Hours</h6>
                <p>
                  Mon - Satday: 9.00am to 6.00pm <br />
                  Sunday: Holiday
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
