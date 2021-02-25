import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/ledlighting.css";

const LedLightingPage = () => {
  return (
    <Container>
      <div className="ledlighting">
        <Row>
          <Col className="text-center">
            <h1>LED Lighting</h1>
            <span>______</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="ledlighting-content">
              <p>
                Your business can save upto 80% on the lighting costs by moving
                up to present day lighting advances like led.
                <br />
              </p>
              <p>
                A customary 36 watts 1,200mm T8 fluorescent tube with magnetic
                stabilizer can be supplanted with a 14 or 18 watts led
                tube producing roughly a similar measure of enlightenment (1,700
                Lumens) thus saving you 65% on lighting costs.
              </p>
              <br />{" "}
              <p>
                A standard 400 watts highbay can be supplanted with a 100 to 150
                watts led highbay producing around a similar measure of
                brightening (20,000 Lumens) thus saving you 64% on lighting
                costs.
              </p>
              <br />{" "}
              <p>
                A 35 watts halogen downlight can be supplanted with a 6 watts
                led creating roughly a similar measure of enlightenment (450
                Lumens) thus saving you 82% on lighting costs.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LedLightingPage;
