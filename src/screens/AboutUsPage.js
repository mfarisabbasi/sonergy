import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/aboutus.css";

const AboutUsPage = () => {
  return (
    <Container>
      <div className="aboutus">
        <Row>
          <Col className="text-center">
            <h1>ABOUT US</h1>
            <span>______</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="aboutus-content">
              <p className="text-center">
                The director of Sonergy has a tremendous experience stretches
                over 9 years in the field of Victorian Energy Upgrades. He has
                worked with numerous companies and have gained the knowledge and
                skills require to get customer satisfaction by providing
                competitive solution to their Solar and Led lighting for both
                residential and commercial. Have provided energy efficient
                lights to 1000s of households and commercial properties across
                Victoria and helping them in reducing their electricity bill and
                savingthe environment. We are also in the Solar industry for 7
                years. Having helped households in getting best solar deals in
                commeptitive price. Our target is to help households to go
                renewable energy by 100% and we are confident that with your
                support we can reach there soon. We know we are not the only
                company doing it but we want to be one of the companies who can
                be remembered as the one who help government in achieving their
                renewable targets.
              </p>
              <p>Regards Team Sonergy</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutUsPage;
