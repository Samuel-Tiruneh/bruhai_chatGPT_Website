import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FAQ.css';

function FAQ() {
  return (
    <Container className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <Row className="faq-row">
        <Col md={6} className="faq-item">
          <i className="fas fa-info-circle question-icon"></i>
          <div>
            <h3>What is Bruh AI?</h3>
            <p>Bruh AI is an advanced conversational AI platform based on ChatGPT technology. It helps users with a wide range of tasks including answering questions, brainstorming ideas, and providing support.</p>
          </div>
        </Col>
        <Col md={6} className="faq-item">
          <i className="fas fa-user-plus question-icon"></i>
          <div>
            <h3>How do I create an account?</h3>
            <p>Creating an account on Bruh AI is easy. Simply click on the "Sign Up" button on the homepage, fill in the required details, and follow the prompts to complete your registration.</p>
          </div>
        </Col>
      </Row>
      <Row className="faq-row">
        <Col md={6} className="faq-item">
          <i className="fas fa-dollar-sign question-icon"></i>
          <div>
            <h3>What are the available pricing plans?</h3>
            <p>Bruh AI offers several pricing plans:
              <ul>
                <li><strong>Free Plan</strong>: Access to GPT-2 with limited features.</li>
                <li><strong>Standard Plan</strong>: $20/month for GPT-3.5 with advanced features.</li>
                <li><strong>Premium Plan</strong>: $45/month for GPT-4 with all features and premium support.</li>
              </ul>
            </p>
          </div>
        </Col>
        <Col md={6} className="faq-item">
          <i className="fas fa-credit-card question-icon"></i>
          <div>
            <h3>What payment methods do you accept?</h3>
            <p>We accept various payment methods including credit cards, PayPal, and cryptocurrency.</p>
          </div>
        </Col>
      </Row>
      <Row className="faq-row">
        <Col md={6} className="faq-item">
          <i className="fas fa-gift question-icon"></i>
          <div>
            <h3>Is there a free trial available?</h3>
            <p>Yes, we offer a free trial for new users to explore the features of Bruh AI. You can sign up for the trial on our pricing page.</p>
          </div>
        </Col>
        <Col md={6} className="faq-item">
          <i className="fas fa-key question-icon"></i>
          <div>
            <h3>How do I reset my password?</h3>
            <p>If you have forgotten your password, you can reset it by clicking the "Forgot Password" link on the login page and following the instructions.</p>
          </div>
        </Col>
      </Row>
      <Row className="faq-row">
        <Col md={6} className="faq-item">
          <i className="fas fa-headset question-icon"></i>
          <div>
            <h3>How do I contact customer support?</h3>
            <p>You can reach our customer support team via the contact form on our "Contact Us" page or by emailing samuelplusweb@gmail.com</p>
          </div>
        </Col>
        <Col md={6} className="faq-item">
          <i className="fas fa-lock question-icon"></i>
          <div>
            <h3>Is my payment information secure?</h3>
            <p>Yes, your payment information is secure. We use industry-standard encryption to protect your data.</p>
          </div>
        </Col>
      </Row>
      <Row className="faq-row">
        <Col md={6} className="faq-item">
          <i className="fas fa-newspaper question-icon"></i>
          <div>
            <h3>Where can I find the latest updates?</h3>
            <p>You can find the latest updates and news on our blog or by subscribing to our newsletter.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
