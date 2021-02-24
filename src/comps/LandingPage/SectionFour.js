import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  RiTeamFill,
  RiMoneyDollarCircleFill,
  RiThumbUpFill,
} from "react-icons/ri";
import "../../styles/LandingPage/section4.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionFour = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container data-aos-duration="1000" data-aos="fade">
      <div className="section4">
        <Row>
          <Col className="text-center" lg={12}>
            <h1>
              Our Working <span>Process</span>
            </h1>
            <span>____</span>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="section4-box">
              <div className="icon-box">
                <div className="icon-step">1</div>
                <RiTeamFill size={50} color={"#ff9304"} />
              </div>
              <h3>Meet Our Team</h3>
              <p>Book a call on our website or (+321) 456 78 901</p>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="section4-box">
              <div className="icon-box">
                <div className="icon-step">2</div>
                <RiMoneyDollarCircleFill size={50} color={"#ff9304"} />
              </div>
              <h3>Get A Quote</h3>
              <p>Our Professional Team Will Provide Approximate Estimation.</p>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="section4-box">
              <div className="icon-box">
                <div className="icon-step">3</div>
                <RiThumbUpFill size={50} color={"#ff9304"} />
              </div>
              <h3>Start Your Project</h3>
              <p>Here We Can Start Your Project As Your Plan.</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionFour;
