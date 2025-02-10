import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, setMessage }) {
  const navigate = useNavigate();

  const handleMakeAppointmentClick = () => {
    if (user) {
      navigate('/dashboard?formType=addAppointment');
    } else {
      setMessage('Sign-in to make an appointment.');
    }
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/signin" style={linkStyle}>Sign In</Link>
      <Link to="/about" style={linkStyle}>About Us</Link>
      
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
