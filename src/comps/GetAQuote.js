import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuoteForm from "./QuoteForm";
import "../styles/quote.css";

const GetAQuote = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <QuoteForm setShowForm={setShowForm} />
      ) : (
        <div className="quote">
          <div onClick={() => setShowForm(true)}>
            <Row>
              <Col className="text-center">
                <h5>Get A Free Quote</h5>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default GetAQuote;
