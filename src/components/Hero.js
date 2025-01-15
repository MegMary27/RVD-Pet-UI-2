import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="containr">
        <h1>Welcome to RVD Pet Clinic</h1>
        <p>Sharing Pet Care with Compassion</p>
        {/* Use Link to navigate to the Make Appointment page */}
        <Link to="/appointment">
          <button>Book an Appointment</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
