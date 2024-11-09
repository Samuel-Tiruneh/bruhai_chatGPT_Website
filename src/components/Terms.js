import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h2>Terms of Use</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Privacy Policy
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Your privacy is important to us. We collect personal information to enhance your experience on our platform. This section outlines how we handle your data...</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Terms of Service
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>By using our services, you agree to comply with our terms. This includes respecting the rights of others and not engaging in prohibited activities...</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            User Guidelines
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>Our user guidelines are designed to ensure a safe and enjoyable experience for everyone. Please adhere to these guidelines while using our platform...</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Dispute Resolution
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>In the event of a dispute, we encourage users to resolve issues amicably. If necessary, disputes may be submitted to arbitration as outlined in our terms...</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Terms; // Ensure this line is present