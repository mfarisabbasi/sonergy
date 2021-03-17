import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/solarsystem.css";
import { BsBuilding, BsBatteryCharging, BsHouseFill } from "react-icons/bs";

const SolarSystemPage = () => {
  const [showCommercial, setShowCommercial] = useState(false);
  const [showResidential, setShowResidential] = useState(false);
  const [showBattery, setShowBattery] = useState(false);

  const handleCommercial = () => {
    setShowCommercial(true);
    setShowResidential(false);
    setShowBattery(false);
  };

  const handleResidential = () => {
    setShowResidential(true);
    setShowCommercial(false);
    setShowBattery(false);
  };

  const handleBattery = () => {
    setShowBattery(true);
    setShowResidential(false);
    setShowCommercial(false);
  };

  return (
    <Container>
      <div className="solarsystem">
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
            {!showCommercial ? (
              <div className="solarbox">
                <h2>COMMERCIAL SOLAR</h2>
                <span>______</span>
                <div className="icon">
                  <BsBuilding size={100} color={"#000000"} />
                </div>
                <br />
                <button className="solarbox-button" onClick={handleCommercial}>
                  Read More
                </button>
              </div>
            ) : (
              <div className="contentbox">
                Regardless of the size of the company solar panels can reduce
                electricity usage and reduce your carbon footprint and saves you
                money every year. Most business which are active during the day
                time are perfect to utilise the solar energy as they can save
                alot of electricity from the grid. Even the businesses which
                runs 24/7 can save electricity during Sun hours by having a good
                amount of solar panels on their roof top. If you are ready and
                want to switch and help the environment by getting your business
                carbon neutral then do contact us and we will be happy to help
                you out the best possible solar solution. We are just a click
                away.
              </div>
            )}
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
            {!showResidential ? (
              <div className="solarbox solarbox-middle">
                <h2>RESIDENTIAL SOLAR</h2>
                <span>______</span>
                <div className="icon-middle">
                  <BsHouseFill size={100} color={"#ff9304"} />
                </div>
                <br />
                <button
                  className="solarbox-middle-button"
                  onClick={handleResidential}
                >
                  Read More
                </button>
              </div>
            ) : (
              <div className="contentbox-middle">
                Solar panels are cost effective and because of the abundance of
                sunlight Australians are benefiting from Solar energy. Every
                month many Australians are switching to Solar power and be less
                reliant on grid connection. Getting Solar panels on your roof
                not only reduce the cost of your electricity bill bu also
                increases your house value. If you want to talk about your
                options of having a solar panel system at your house then don't
                hesitate to contact us we will walk you through to the process.
              </div>
            )}
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
            {!showBattery ? (
              <div className="solarbox">
                <h2>SOLAR BATTERY STORAGE</h2>
                <span>______</span>
                <div className="icon">
                  <BsBatteryCharging size={100} color={"#000000"} />
                </div>
                <br />
                <button className="solarbox-button" onClick={handleBattery}>
                  Read More
                </button>
              </div>
            ) : (
              <div className="contentbox">
                Solar batteries been around for a while now but for home users
                its relatively new and gaining momentum. By having a solar
                battrry you can save the extra Solar energthst you produces and
                store it in your battery rathern than giving it to thr grid to
                get few cents of credit per kwh. Find out more by contacting us
                about your Solar battery option.
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SolarSystemPage;
