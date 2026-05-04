import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about-content">
        <h1>Our Story</h1>
        <h2>Little Lemon</h2>
        <p>
          Founded in Chicago in 1995, Little Lemon is a family-owned Mediterranean restaurant 
          born from the passion of two brothers, Adrian and Mario. Inspired by their 
          grandmother's secret recipes from the coastal hills of Italy, they set out to 
          bring the authentic flavors of the Mediterranean to the heart of the Midwest.
        </p>
        <p>
          Every dish we serve is a tribute to our heritage, crafted with the freshest 
          locally-sourced ingredients and a modern culinary twist. We believe that 
          great food brings people together, and we invite you to join our family 
          table and share in the joy of a truly memorable dining experience.
        </p>
      </div>
      <div className="about-images">
        <div className="image-stack">
          <img src="/mario-and-adrian.jpg" alt="Chefs Adrian and Mario" className="img-top" />
          <img src="/restaurant.jpg" alt="Restaurant interior" className="img-bottom" />
        </div>
      </div>
    </section>
  );
};

export default About;
