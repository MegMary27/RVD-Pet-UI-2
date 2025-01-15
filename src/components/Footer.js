import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#6e2594', 
      color: '#FFFFFF', // Explicitly set to white
      textAlign: 'center', 
      padding: '20px 0'
    }}>
      <h4 style={{ color: '#FFFFFF' }}>&copy; 2025 RVD Pet Clinic. All rights reserved.</h4>
      <p>
        <a 
          href="https://maps.app.goo.gl/drjzBungSVfZsanL9" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#FFFFFF', textDecoration: 'underline' }}
        >
          Google Maps Location
        </a>
      </p>
    </footer>
  );
}

export default Footer;
