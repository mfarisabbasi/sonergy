import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/404.css";

const NotFoundPage = () => {
  return (
    <Container>
      <div className="notfound">
        <Row>
          <Col className="text-center">
            <h1>404</h1>
            <h3>Page Not Found</h3>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default NotFoundPage;
