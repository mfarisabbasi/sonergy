import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/LandingPage/section6.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionSix = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container data-aos="fade-left" data-aos-duration="1000">
      <div className="section6">
        <Row>
          <Col className="text-center">
            <h1>
              <span>Schedule</span> Appointment
            </h1>
            <span>____</span>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <form>
              <input type="text" placeholder="Full Name" />
              <br />
              <input type="email" placeholder="Valid Email" />
              <input type="tel" placeholder="Phone Number" />
              <br />
              <textarea
                placeholder="Your Message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <button className="section6-btn" type="submit">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionSix;
