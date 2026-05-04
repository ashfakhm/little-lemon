import React, { useState } from "react";
import { X } from "lucide-react";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="main-nav">
      <div className="container nav-container">
        <div className="logo">
          <a href="/">
            <img src="/Logo.svg" alt="Little Lemon" className="nav-logo" />
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} />
          ) : (
            <img src="/hamburger.svg" alt="menu" className="hamburger-icon" />
          )}
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setIsOpen(false)}>
              Menu
            </a>
          </li>
          <li>
            <a
              href="#reservations"
              className="active"
              onClick={() => setIsOpen(false)}
            >
              Reservations
            </a>
          </li>
          <li>
            <a href="#order" onClick={() => setIsOpen(false)}>
              Order Online
            </a>
          </li>
          <li>
            <a href="#login" onClick={() => setIsOpen(false)}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
