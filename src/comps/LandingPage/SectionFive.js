import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsStarHalf } from "react-icons/bs";
import "../../styles/LandingPage/section5.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionFive = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container
      data-aos-duration="1000"
      data-aos="slide-up"
      fluid
      className="section5"
    >
      <Row>
        <Col
          className="text-sm-center text-xs-center text-md-center text-lg-left text-xl-left"
          lg={12}
        >
          <h1>
            Customers <span>Feedback</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="feedback-box">
            <BsStarHalf size={50} color={"#ff9304"} className="pb-2" />
            <h5>John Doe</h5>
            <h6>Chairman Suns Solutions</h6>
            <span>___</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </Col>
        <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="feedback-box">
            <BsStarHalf size={50} color={"#ff9304"} className="pb-2" />
            <h5>John Doe</h5>
            <h6>Chairman Suns Solutions</h6>
            <span>___</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </Col>
        <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="feedback-box">
            <BsStarHalf size={50} color={"#ff9304"} className="pb-2" />
            <h5>John Doe</h5>
            <h6>Chairman Suns Solutions</h6>
            <span>___</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default SectionFive;
