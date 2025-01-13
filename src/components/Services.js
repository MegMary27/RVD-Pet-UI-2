import React from 'react';
import './Services.css';

// Import images from the assets folder
import checkupImage from '../assets/checkup.jpg';
import vaccinationImage from '../assets/vaccinations.jpg';
import surgeryImage from '../assets/surgery.png';

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <img src={checkupImage} alt="Check-ups" className="service-image" />
            <h3>Check-ups</h3>
            <p>Comprehensive health check-ups for your pets.</p>
          </div>
          <div className="card">
            <img src={vaccinationImage} alt="Vaccinations" className="service-image" />
            <h3>Vaccinations</h3>
            <p>Keep your pets healthy with regular vaccines.</p>
          </div>
          <div className="card">
            <img src={surgeryImage} alt="Surgery" className="service-image" />
            <h3>Surgery</h3>
            <p>Expert surgical care with utmost safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
