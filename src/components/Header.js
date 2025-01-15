import React from 'react';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6e2594',
        color: 'white',
        padding: '10px 0',
      }}
    >
      
      
      {/* Clinic Name */}
      <h1 style={{ margin: 0 }}>RVD Pet Clinic</h1>
    </header>
  );
}

export default Header;
