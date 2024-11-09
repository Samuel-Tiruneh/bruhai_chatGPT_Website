import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Form, FormControl, Offcanvas } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="p-3">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/th.png`} 
            alt="Logo" 
            className="logo" 
          />
          <span className="bruh-ai-text ml-2">Bruh AI</span>
        </Navbar.Brand>
        <div className="d-flex align-items-center d-lg-none order-sm-2">
          <Form className="d-flex mr-2">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search-box"
            />
            <Button variant="outline-light" className="search-btn"><i className="fas fa-search"></i></Button>
          </Form>
          {isLoggedIn ? (
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Nav.Link as={Link} to="/login" className={`nav-link ${isLoginPage ? 'active' : ''}`}>Login</Nav.Link>
              <Button variant="outline-success" as={Link} to="/register" className={`signup-btn ${isRegisterPage ? 'active' : ''}`}>
                Signup
              </Button>
            </>
          )}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-sm-1 d-lg-none" onClick={handleShow} />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex">
          <Nav className="align-items-center ml-auto">
            <Form className="d-flex mr-3">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="search-box"
              />
              <Button variant="outline-light" className="search-btn"><i className="fas fa-search"></i></Button>
            </Form>
            {isLoggedIn ? (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className={`ml-2 nav-link ${isLoginPage ? 'active' : ''}`}>Login</Nav.Link>
                <Button variant="outline-success" as={Link} to="/register" className={`ml-2 signup-btn ${isRegisterPage ? 'active' : ''}`}>
                  Signup
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}><i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link as={Link} to="/features" onClick={handleClose}><i className="fas fa-cogs"></i> Features</Nav.Link>
            <Nav.Link as={Link} to="/pricing" onClick={handleClose}><i className="fas fa-dollar-sign"></i> Pricing</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}><i className="fas fa-envelope"></i> Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/faqs" onClick={handleClose}><i className="fas fa-question-circle"></i> FAQs</Nav.Link>
            <Nav.Link as={Link} to="/try-free" onClick={handleClose}><i className="fas fa-star"></i> Try for Free</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
