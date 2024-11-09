import React from 'react';
import { FaUser, FaStar, FaCrown, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="pricing-container container-fluid p-5">
      <h2 className="text-center mb-5">Our Pricing Plans</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="pricing-box">
            <h3><FaUser /> Free</h3>
            <p className="price">$0/month</p>
            <p className="plan-type">GPT-2</p>
            <ul className="features">
              <li><FaCheck /> Basic AI functionality</li>
              <li><FaCheck /> Limited API calls</li>
              <li><FaCheck /> Email support</li>
            </ul>
            <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="pricing-box featured-box">
            <h3><FaStar /> Standard</h3>
            <p className="price">$20/month</p>
            <p className="plan-type">GPT-3.5</p>
            <ul className="features">
              <li><FaCheck /> Advanced AI functionality</li>
              <li><FaCheck /> Unlimited API calls</li>
              <li><FaCheck /> Priority email support</li>
              <li><FaCheck /> Access to new features</li>
            </ul>
            <button className="btn btn-secondary" disabled>Not Active Yet</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="pricing-box">
            <h3><FaCrown /> Premium</h3>
            <p className="price">$45/month</p>
            <p className="plan-type">GPT-4</p>
            <ul className="features">
              <li><FaCheck /> Cutting-edge AI functionality</li>
              <li><FaCheck /> Unlimited API calls</li>
              <li><FaCheck /> Dedicated support</li>
              <li><FaCheck /> Early access to beta features</li>
              <li><FaCheck /> Custom solutions</li>
            </ul>
            <button className="btn btn-secondary" disabled>Not Active Yet</button>
          </div>
        </div>
      </div>
      
      <h2 className="text-center mt-5">Payment Methods</h2>
      <div className="payment-logos text-center">
        <img src={`${process.env.PUBLIC_URL}/tellbirr.png`} alt="Telebirr" />
        <img src={`${process.env.PUBLIC_URL}/cbe.png`} alt="CBE Birr" />
        <img src={`${process.env.PUBLIC_URL}/paypal.png`} alt="PayPal" />
        <img src={`${process.env.PUBLIC_URL}/visa.png`} alt="Visa" />
        <img src={`${process.env.PUBLIC_URL}/mastercard.png`} alt="MasterCard" />
        <img src={`${process.env.PUBLIC_URL}/binace.png`} alt="Binance" />
        <img src={`${process.env.PUBLIC_URL}/bitget.png`} alt="Bitget" />
        <img src={`${process.env.PUBLIC_URL}/bybit.png`} alt="Bybit" />
      </div>
    </div>
  );
}

export default Pricing;
