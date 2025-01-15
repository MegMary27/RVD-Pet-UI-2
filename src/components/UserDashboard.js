import React from 'react';
import './UserDashboard.css';

function UserDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Your Dashboard</h2>
      <div className="dashboard-content-horizontal">
        {/* Make an Appointment Section */}
        <div className="dashboard-section">
          <h3>Make an Appointment</h3>
          <form className="appointment-form">
            <label htmlFor="serviceType">Type of Service:</label>
            <select id="serviceType" required>
              <option value="" disabled selected>
                Select Service
              </option>
              <option value="general_checkup">General Checkup</option>
              <option value="vaccination">Vaccination</option>
            </select>

            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input type="date" id="appointmentDate" required />

            <label htmlFor="appointmentTime">Appointment Time:</label>
            <input type="time" id="appointmentTime" required />

            <button type="submit">Book Appointment</button>
          </form>
        </div>

        {/* Add Pet Details Section */}
        <div className="dashboard-section">
          <h3>Add Pet Details</h3>
          <form className="pet-details-form">
            <label htmlFor="petName">Pet Name:</label>
            <input type="text" id="petName" placeholder="Enter Pet Name" required />

            <label htmlFor="petBreed">Pet Breed:</label>
            <input type="text" id="petBreed" placeholder="Enter Pet Breed" required />

            <label htmlFor="petAge">Pet Age:</label>
            <input type="number" id="petAge" placeholder="Enter Pet Age" required />

            <button type="submit">Save Pet Details</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;