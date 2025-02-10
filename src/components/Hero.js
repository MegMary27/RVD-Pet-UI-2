import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './Hero.css';

function Hero() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBookAppointmentClick = () => {
    // Navigate to the SignIn/SignUp page
    navigate('./signin'); // Change this to your actual route for SignIn/SignUp
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