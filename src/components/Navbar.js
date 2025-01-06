import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f8f9fa', padding: '10px' }}>
      <a href="#home">Home</a>
      <a href="#signin">Sign In</a>
      <a href="#about">About Us</a>
      <a href="#appointment">Make Appointment</a>
      <a href="#services">Services</a>
      <a href="#food">Food & Accessories</a>
      <a href="#location">Location & Hours</a>
    </nav>
  );
}

export default Navbar;
