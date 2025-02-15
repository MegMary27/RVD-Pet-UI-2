import React from 'react';
import './FoodAndAccessories.css';

function FoodAndAccessories() {
  return (
    <section id="food">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="clinic-info">
          <h3>RVD Pet Clinic</h3>
          <div className="contact-info">
            <p>Email: rvdpetclinic@gmail.com</p>
            <p>Phone: +91 7019351472
            </p>
          </div>
          <div className="timings">
            <h4>Timings:</h4>
            <ul>
              <li>Monday to Saturday: 9:00 am to 2:00 pm, 4:30 pm to 9:00 pm</li>
              <li>Sunday: 9:00 am to 2:00 pm</li>
            </ul>
          </div>
          <div className="doctor-availability">
            <h4>Doctor Availability:</h4>
            <ul>
              <li>Monday to Saturday: 4:30 pm to 9:00 pm</li>
              <li>Sunday: 9:00 am to 2:00 pm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodAndAccessories;
