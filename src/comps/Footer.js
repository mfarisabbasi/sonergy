import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <div className="footer">
          <div className="footer-top">
            <Row>
              <Col
                className="text-center"
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
              >
                <div className="footer-logo">
                  <img
                    src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614334545/Sonergy/mainLogo_tpqyso.webp"
                    alt="sonergy"
                  ></img>
                </div>
                <div className="footer-social">
                  <span>
                    <a href="https://www.facebook.com/Sonergy-105066204734018">
                      <i
                        className="fab fa-facebook-square
"
                      ></i>
                    </a>
                  </span>
                  <span>
                    <a
                      target="no_blank"
                      href="https://api.whatsapp.com/send/?phone=610434130177&text=Hi%2C+I%27m+interested+in+your+services&app_absent=0"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </span>
                  <span>
                    <a href="https://pk.linkedin.com/company/sonergy">
                      <i
                        className="fab fa-linkedin
"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="clean_energy">
                  <img
                    src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614863709/Sonergy/cleanenergycouncil_gdano8.webp"
                    alt="sonergy"
                  ></img>
                </div>
              </Col>
              <Col
                className="text-center "
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
              >
                <div className="footer-useful">
                  <h5>USEFUL LINKS</h5>
                  <span>______</span>
                  <ul>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="/solar-system">Solar System</a>
                    </li>
                    <li>
                      <a href="/led-lighting">LED Lighting</a>
                    </li>
                    <li>
                      <a href="/solar-guide-and-flyer.pdf">CEC GUIDELINES</a>
                    </li>
                    <li>
                      <a href="/approved-solar-retailer-consumer-flyer.pdf">
                        Approved Solar Retailer Consumer Flyer
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col
                className="text-center"
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
              >
                <div className="footer-useful2">
                  <h5>Contact Details</h5>
                  <span>______</span>
                  <h6>Phone & Email</h6>
                  <p>
                    +61-434130177
                    <br /> info@sonergy.com.au
                  </p>
                  <h6>Working Hours</h6>
                  <p>
                    Mon - Fri: 9.00am to 5.00pm <br />
                    Sat,Sun: Holiday
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Container fluid className="footer-bottom">
        <div>
          <Row>
            <Col className="text-center">
              <p>
                &copy; Copyrights 2021 <span>SONERGY.</span> All Rights Reserved{" "}
                <br />
                ABN 78 191 155 326{" "}
                <a className="footer-bottom-a" href="/privacy-policy">
                  | Privacy Policy |
                </a>{" "}
                <a className="footer-bottom-a" href="/tos">
                  Terms And Conditions |
                </a>{" "}
                <br />
                Developed By{" "}
                <span>
                  <a href="https://thenovustech.com/" target="no_blank">
                    TheNovusTech
                  </a>
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Footer;
