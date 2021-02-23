import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col className="topbar1" lg={6}>
            <span>
              <i className="fa fa-bolt"></i>
              &nbsp;No Extra Chages for Nights & Weekends.
            </span>
          </Col>
          <Col className="topbar2 text-right" lg={3}>
            <span>Careers</span>
            <span>Support</span>
            <span>FAQs</span>
          </Col>
          <Col className="topbar3 text-center" lg={3}>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
