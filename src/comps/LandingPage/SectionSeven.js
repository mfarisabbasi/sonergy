import React, { useEffect } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import "../../styles/LandingPage/section7.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionSeven = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container data-aos="fade-down" data-aos-duration="1000" fluid>
      <div className="section7">
        <Row>
          <Col className="text-center text-md-center text-lg-left text-xl-left">
            <h1>PARTNERS</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Carousel className="slider" indicators={false}>
              <Carousel.Item>
                <img
                  className=""
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614004550/Sonergy/seraphim_sjplyy.png"
                  alt="First slide"
                />
                <img
                  className=""
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614004550/Sonergy/jinko_solar_r610yg.png"
                  alt="Second slide"
                />
                <img
                  className=""
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614004550/Sonergy/growatt_yglp9l.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=""
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614004550/Sonergy/good_we_a2yncf.jpg"
                  alt="First slide"
                />
                <img
                  className=""
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614004550/Sonergy/qcells_ylrsz8.png"
                  alt="Second slide"
                />
                <img
                  className=""
                  src="https://res.cloudinary.com/dvwcygw04/image/upload/v1614004550/Sonergy/sungrow_wydlps.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionSeven;
