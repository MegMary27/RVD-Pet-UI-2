import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Welcome to RVD Pet Clinic</h1>
        <p>Sharing Pet Care with Compassion</p>
        <a href="#appointment">
          <button>Book an Appointment</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
