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
              <h6>Reasonable Price</h6>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="box-middle">
              <i className="fa fa-user-shield fa-3x"></i>
              <h6>Experienced Team</h6>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="box">
              <i className="fa fa-shield-alt fa-3x"></i>
              <h6>Workmanship Warranty</h6>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
    </Container>
  );
};

export default SectionTwo;
