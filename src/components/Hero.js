import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './Hero.css';

function Hero() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBookAppointmentClick = () => {
    // Navigate to the UserDashboard page with the Add Appointment form open
    navigate('/dashboard?formType=addAppointment');
  };

  return (
    <section id="home" className="hero">
      <div className="containr">
        <h1>Welcome to RVD Pet Clinic</h1>
        <p>Sharing Pet Care with Compassion</p>
        <button onClick={handleBookAppointmentClick}>Book an Appointment</button>
      </div>
    </section>
  );
}

export default Hero;

