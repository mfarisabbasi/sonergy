import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/quote-form.css";

const QuoteForm = ({ setShowForm }) => {
  return (
    <Container>
      <div className="quote-form">
        <Row>
          <Col className="text-center">
            <form>
              <div
                onClick={() => setShowForm(false)}
                className="quote-form-close"
              >
                <i className="fa fa-times fa-3x"></i>
              </div>
              <h2>Get A Free Quote</h2>
              <input
                className="quote-form-input"
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className="quote-form-input"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                className="quote-form-input"
                type="tel"
                placeholder="Phone Number"
              />
              <br />
              <select placeholder="Story">
                <option value="singlestory">Single Story</option>
                <option value="doublestory">Double Story</option>
              </select>
              <select placeholder="System Size">
                <option value="6.6kw">6.6kw</option>
                <option value="9.9kw">9.9kw</option>
              </select>
              <br />
              <input type="submit" value="Get A Free Quote" />
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default QuoteForm;