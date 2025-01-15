import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/signin" style={linkStyle}>Sign In</Link>
      <Link to="/about" style={linkStyle}>About Us</Link>
      <Link to="/appointment" style={linkStyle}>Make Appointment</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/food" style={linkStyle}>Contact Us</Link>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#f8f9fa',
  padding: '10px',
};

const linkStyle = {
  color: '#6a0dad', // Purple color for the navbar text
  textDecoration: 'none',
  fontFamily: "'Arial', sans-serif",
  fontWeight: 'bold',
};

export default Navbar;
