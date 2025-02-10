import React from 'react';
import logo from '../assets/rvdlogo.png'; // Ensure the logo file is in the correct path

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6e2594',
        color: 'white',
        padding: '20px 0',
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="RVD Pet Clinic Logo"
        style={{ height: '90px', marginRight: '15px' }}
      />

      {/* Clinic Name */}
      <h1 style={{ margin: 0 }}>RVD Pet Clinic</h1>
    </header>
  );
}

export default Header;