import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFeatureClick = () => {
    navigate('/');
    setTimeout(() => {
      const featureSection = document.getElementById('features');
      featureSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-light p-3 sidebar">
      <Nav className="flex-column sidebar-nav mt-4">
        <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>
          <i className="fas fa-home"></i> Home
        </Nav.Link>
        <Nav.Link onClick={handleFeatureClick} className={location.pathname === "/features" ? "active" : ""}>
          <i className="fas fa-cogs"></i> Features
        </Nav.Link>
        <Nav.Link as={Link} to="/pricing" className={location.pathname === "/pricing" ? "active" : ""}>
          <i className="fas fa-dollar-sign"></i> Pricing
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          <i className="fas fa-envelope"></i> Contact Us
        </Nav.Link>
        <Nav.Link as={Link} to="/faqs" className={location.pathname === "/faqs" ? "active" : ""}>
          <i className="fas fa-question-circle"></i> FAQs
        </Nav.Link>
       
        <Nav.Link as={Link} to="/try-free" className={location.pathname === "/try-free" ? "active" : ""}>
          <i className="fas fa-star"></i> Try for Free
        </Nav.Link>
      </Nav>
      <div className="mt-auto social-media-icons">
        {/* Ensure these links are correct */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;