import React from 'react';

function UserDetails() {
  // Simulate user data (replace with real data from context, props, or API)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedDate: '15 March 2023',
  };

  return (
    <div style={userDetailsStyle}>
      <h1>Welcome, {user.name}!</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Joined On:</strong> {user.joinedDate}</p>
    </div>
  );
}

const userDetailsStyle = {
  textAlign: 'center',
  padding: '20px',
  marginTop: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default UserDetails;
