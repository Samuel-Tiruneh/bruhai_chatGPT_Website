import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('login');
  };

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <section className="home" fluid>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-left">
              <h1>Your AI Partner for Creativity and Problem Solving</h1>
              <p>We're dedicated to providing you with quick, accurate answers and helpful insights, making your quest for knowledge easier and more enjoyable. Just ask, and we're here for you!</p>
            </Col>
            <Col md={6} className="text-right">
              <img src={`${process.env.PUBLIC_URL}/th.png`} alt="Bruh AI Logo" className="logo larger-logo rotate-animation" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="features" className="features-section">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h2>Discover the Features</h2>
              <p>Unlock your creativity and solve problems effortlessly with Bruh AI.</p>
            </Col>
          </Row>
          <Row className="feature-items justify-content-center">
            <Col xs={12} md={5} className="feature-item">
              <div className="feature-text corner-top-left">
                <strong><i className="fas fa-bolt"></i> Instant Answers</strong>
                <p>Get quick, accurate responses to your questions, ensuring you always have the information you need right at your fingertips.</p>
              </div>
            </Col>
            <Col xs={12} md={5} className="feature-item">
              <div className="feature-text corner-top-right">
                <strong><i className="fas fa-lightbulb"></i> Creative Brainstorming</strong>
                <p>Generate new ideas and perspectives with AI assistance, sparking creativity and helping you think outside the box.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <img src={`${process.env.PUBLIC_URL}/th.png`} alt="Bruh AI Logo" className="feature-image center-image" />
            </Col>
          </Row>
          <Row className="feature-items justify-content-center">
            <Col xs={12} md={5} className="feature-item">
              <div className="feature-text corner-bottom-left">
                <strong><i className="fas fa-user-cog"></i> Personalized Suggestions</strong>
                <p>Receive tailored recommendations and insights that align with your unique needs and preferences.</p>
              </div>
            </Col>
            <Col xs={12} md={5} className="feature-item">
              <div className="feature-text corner-bottom-right">
                <strong><i className="fas fa-clock"></i> 24/7 Availability</strong>
                <p>Access Bruh AI any time, anywhere for ongoing support, ensuring you're never without assistance.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h2>Get Started for Free</h2>
              <p>Experience the power of Bruh AI today. Sign up for a free trial and unlock your creative potential!</p>
              <Button variant="primary" className="cta-button" onClick={handleCTAClick}>Try Bruh AI for Free</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
