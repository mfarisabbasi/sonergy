import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/contact.css";

const ContactPage = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <div className="contact">
            <h1>Contact Us</h1>
            <span>______</span>
          </div>
        </Col>
      </Row>
      <Row className="contact-row">
        <Col
          className="text-center contact-l"
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <h3>Fill Out The Form Below</h3>
          <form>
            <input className="contact-form" type="text" placeholder="Name" />
            <input className="contact-form" type="email" placeholder="Email" />
            <input
              className="contact-form"
              type="tel"
              placeholder="Phone Number"
            />
            <textarea
              className="contact-form-textarea"
              cols="30"
              rows="5"
              placeholder="What do you need?(Comments)"
            ></textarea>
            <br />
            <input className="contact-form-btn" type="submit" value="Submit" />
          </form>
        </Col>
        <Col className="contact-r" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="mt-5">
            <h4>CONTACT DETAILS</h4>
            <span>________</span>
            <p>
              Phone & Email +324-123-45-978 <br />
              supportteam@wireman.com
            </p>
          </div>
          <div>
            <h4>Working Hours</h4>
            <span>________</span>
            <p>
              Mon - Satday: 9.00am to 6.00pm <br />
              Sunday: Holiday
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
