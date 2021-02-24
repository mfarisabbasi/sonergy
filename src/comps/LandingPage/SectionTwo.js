import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/LandingPage/section2.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionTwo = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container data-aos-duration="1000" data-aos="fade">
      <div className="section2">
        <Row className="section2-row">
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="box">
              <i className="fa fa-money-bill-wave-alt fa-3x"></i>
              <h4>Reasonable Price</h4>
              <h6>Flexible Pricing</h6>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="box-middle">
              <i className="fa fa-user-shield fa-3x"></i>
              <h4>Experienced Team</h4>
              <h6>Working 24/7</h6>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="box">
              <i className="fa fa-shield-alt fa-3x"></i>
              <h4>3 Years Warranty</h4>
              <h6>On Every Service</h6>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionTwo;
