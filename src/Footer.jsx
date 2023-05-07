import React from "react";
import { Container, Row, Col } from "react-bootstrap";import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Rishi's Cart</h3>
            <p>The world of kids wear</p>
          </Col>
          <Col md={4}>
            <h3>Links</h3>
            <ul>
            
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Contact Us</h3>
            <p>123 Main Street<br />New York, NY 10001<br />Phone: (555) 555-1234</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

