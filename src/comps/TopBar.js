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
              &nbsp;Clean Energy Council Approved Solar Retailer
            </span>
          </Col>
          <Col className="topbar2 text-right" lg={3}>
            <span>Careers</span>
            <span>FAQs</span>
          </Col>
          <Col className="topbar3 text-center" lg={3}>
            <span>
              <i
                className="fab fa-facebook-square
"
              ></i>
            </span>
            <span>
              <a
                target="no_blank"
                href="https://api.whatsapp.com/send/?phone=610434130177&text=Hi%2C+I%27m+interested+in+your+services&app_absent=0"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
