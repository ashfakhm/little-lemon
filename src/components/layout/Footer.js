import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img src="/Logo.svg" alt="Little Lemon" />
        </div>

        <div className="footer-nav">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Lemon Street, Chicago</p>
          <p>(555) 123-4567</p>
          <p>contact@littlelemon.com</p>
        </div>

        <div className="footer-social">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
