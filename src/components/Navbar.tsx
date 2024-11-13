import React, { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import '../app/styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          Muhammad Annas
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-link">
            <a href="#hero">Home</a>
          </li>

          <li className="navbar-link">
            <a href="#about">About</a>
          </li>

          <li className="navbar-link">
            <a href="#Skills">Skills</a>
          </li>

          <li className="navbar-link">
            <a href="#Projects">Projects</a>
          </li>

          <li className="navbar-link">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={30} className="text-white" /> : <MdMenu size={30} />}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-link">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>

          <li className="navbar-link">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>

          <li className="navbar-link">
            <a href="#Projects" onClick={toggleMenu}>Projects</a>
          </li>

          <li className="navbar-link">
            <a href="#Skills" onClick={toggleMenu}>Skills</a>
          </li>

          <li className="navbar-link">
            <a href="#Contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
