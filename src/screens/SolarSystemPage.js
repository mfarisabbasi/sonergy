import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/solarsystem.css";
import { BsBuilding, BsBatteryCharging, BsHouseFill } from "react-icons/bs";

const SolarSystemPage = () => {
  return (
    <Container>
      <div className="solarsystem">
        <Row>
          <Col className="text-center">
            <div className="solarbox">
              <h2>COMMERCIAL SOLAR</h2>
              <span>______</span>
              <div className="icon">
                <BsBuilding size={100} color={"#000000"} />
              </div>
              <br />
              <button>Read More</button>
            </div>
          </Col>
          <Col className="text-center">
            <div className="solarbox solarbox-middle">
              <h2>RESIDENTIAL SOLAR</h2>
              <span>______</span>
              <div className="icon">
                <BsHouseFill size={100} color={"#000000"} />
              </div>
              <br />
              <button>Read More</button>
            </div>
          </Col>
          <Col className="text-center">
            <div className="solarbox">
              <h2>SOLAR BATTERY STORAGE</h2>
              <span>______</span>
              <div className="icon">
                <BsBatteryCharging size={100} color={"#000000"} />
              </div>
              <br />
              <button>Read More</button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SolarSystemPage;
