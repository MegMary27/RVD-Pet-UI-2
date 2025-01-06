import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Check-ups</h3>
            <p>Comprehensive health check-ups for your pets.</p>
          </div>
          <div className="card">
            <h3>Vaccinations</h3>
            <p>Keep your pets healthy with regular vaccines.</p>
          </div>
          <div className="card">
            <h3>Surgery</h3>
            <p>Expert surgical care with utmost safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
