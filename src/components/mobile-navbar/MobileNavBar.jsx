import React from "react";
import { Link } from "react-router-dom";
import "./MobileNavBar.css";

const MobileNavBar = ({ isVisible, handleNav }) => {
  return (
    <nav
      className={
        isVisible
          ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-500 bg-[#495E57] ease-in-out duration-300 z-50"
          : "fixed left-[-100%] z-50"
      }
    >
      <ul className="mobile-navbar p-8 pt-20">
        <li className="mb-6">
          <Link to="/#home" onClick={handleNav} className="text-white text-2xl font-markazi hover:text-primary transition-colors">Home</Link>
        </li>
        <li className="mb-6">
          <Link to="/#about" onClick={handleNav} className="text-white text-2xl font-markazi hover:text-primary transition-colors">About</Link>
        </li>
        <li className="mb-6">
          <Link to="/#menu" onClick={handleNav} className="text-white text-2xl font-markazi hover:text-primary transition-colors">Menu</Link>
        </li>
        <li className="mb-6">
          <Link to="/booking" onClick={handleNav} className="text-white text-2xl font-markazi hover:text-primary transition-colors">Reservations</Link>
        </li>
        <li className="mb-6">
          <Link to="/#menu" onClick={handleNav} className="text-white text-2xl font-markazi hover:text-primary transition-colors">Order Online</Link>
        </li>
        <li>
          <Link to="/" onClick={handleNav} className="text-white text-2xl font-markazi hover:text-primary transition-colors">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
