import React from 'react';
import Button from '../UI/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Button variant="primary" onClick={() => document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' })}>
            Reserve a Table
          </Button>
        </div>
        <div className="hero-image-container">
          <img src="/hero-food.jpg" alt="Little Lemon Food" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
