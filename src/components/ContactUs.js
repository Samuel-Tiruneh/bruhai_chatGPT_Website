import React from 'react';
import { FaXing, FaInstagram, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-info-container">
        <div className="contact-left">
          <h3 className="contact-title">Contact Information</h3>
          <p><FaMapMarkerAlt />Poly,Bahirdar,Ethiopia</p>
          <p><FaPhoneAlt /> +251935749521</p>
          <p><FaEnvelope /> samuelplusweb@gmail.com</p>
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXing /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
        <div className="contact-right">
          <h3>Contact Us</h3>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6121.596539557635!2d37.39176544632424!3d11.59663930448821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644ce107991537d%3A0x3e8bedd070a29619!2sBahir%20Dar%20University%20Poly%20Campus!5e0!3m2!1sen!2set!4v1730784102618!5m2!1sen!2set" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default ContactUs;
