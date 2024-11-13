import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div className="hero-content">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <span data-aos="zoom-in">Hello, I am</span>
          
          <span data-aos="zoom-in">Muhammad</span>
          <span data-aos="zoom-in">Annas</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
