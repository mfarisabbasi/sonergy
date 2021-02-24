import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../../styles/LandingPage/section3.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionThree = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Container data-aos-duration="1000" data-aos="zoom-in">
      <div className="section3">
        <Row>
          <Col className="text-center" lg={12}>
            <h1>
              Our <span>Services</span>
            </h1>
            <span>____</span>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center" xs={12} sm={12} md={12} lg={6} xl={6}>
            <Image
              src="https://res.cloudinary.com/dvwcygw04/image/upload/v1613825529/Sonergy/solar-panels-1477987_1920_rkorun.webp"
              fluid
              className="img"
            />
            <div className="text-block2">
              <h4>Complete Solar Solutions</h4>
            </div>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={6} xl={6}>
            <Image
              src="https://res.cloudinary.com/dvwcygw04/image/upload/v1613826751/Sonergy/led-823383_1920_uuqjj8.webp"
              fluid
              className="img"
            />
            <div className="text-block2">
              <h4>LED Lighting</h4>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionThree;
