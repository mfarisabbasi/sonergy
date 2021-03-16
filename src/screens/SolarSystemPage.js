import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/solarsystem.css";
import { BsBuilding, BsBatteryCharging, BsHouseFill } from "react-icons/bs";
import { Link } from "react-scroll";

const SolarSystemPage = () => {
  const [showCommercial, setShowCommercial] = useState(false);
  const [showResidential, setShowResidential] = useState(false);
  const [showBattery, setShowBattery] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
            <div className="solarbox">
              <h2>COMMERCIAL SOLAR</h2>
              <span>______</span>
              <div className="icon">
                <BsBuilding size={100} color={"#000000"} />
              </div>
              <br />
              <Link className="solarbox-button" to="1" spy={true} smooth={true}>
                Read More
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
            <div className="solarbox solarbox-middle">
              <h2>RESIDENTIAL SOLAR</h2>
              <span>______</span>
              <div className="icon-middle">
                <BsHouseFill size={100} color={"#ff9304"} />
              </div>
              <br />
              <Link
                className="solarbox-middle-button"
                to="2"
                spy={true}
                smooth={true}
              >
                Read More
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center">
            <div className="solarbox">
              <h2>SOLAR BATTERY STORAGE</h2>
              <span>______</span>
              <div className="icon">
                <BsBatteryCharging size={100} color={"#000000"} />
              </div>
              <br />
              <Link className="solarbox-button" to="3" spy={true} smooth={true}>
                Read More
              </Link>
            </div>
          </Col>
        </Row>

        <div id="commercial">
          <Row className="mt-5">
            <Col>
              <h3 id="1">Commercial Solar</h3>
              <h5>
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
              </h5>
            </Col>
          </Row>
        </div>

        <div id="residential">
          <Row className="mt-5">
            <Col>
              <h3 id="2">Residential Solar</h3>
              <h5>
                Solar panels are cost effective and because of the abundance of
                sunlight Australians are benefiting from Solar energy. Every
                month many Australians are switching to Solar power and be less
                reliant on grid connection. Getting Solar panels on your roof
                not only reduce the cost of your electricity bill bu also
                increases your house value. If you want to talk about your
                options of having a solar panel system at your house then don't
                hesitate to contact us we will walk you through to the process.
              </h5>
            </Col>
          </Row>
        </div>

        <div id="battery">
          <Row className="mt-5">
            <Col>
              <h3 id="3">Solar Battery Storage</h3>
              <h5>
                Solar batteries been around for a while now but for home users
                its relatively new and gaining momentum. By having a solar
                battrry you can save the extra Solar energthst you produces and
                store it in your battery rathern than giving it to thr grid to
                get few cents of credit per kwh. Find out more by contacting us
                about your Solar battery option.
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default SolarSystemPage;
