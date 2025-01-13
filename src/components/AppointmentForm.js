import React from 'react';
import './AppointmentForm.css';

function AppointmentForm() {
  return (
    <section id="appointment">
      <div className="container">
      <h2>Make an Appointment</h2>
        {/* New text added above the title */}
        
        <p>
          To save appointment details and to receive appointment reminders, please{' '}
          <a href="/signin" className="signin-link">sign in</a>.
        </p>

        
        <div className="form-container">
          <form>
            <label>Your Name:</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Pet's Name:</label>
            <input type="text" placeholder="Enter your pet's name" required />
            <label>Phone Number:</label>
            <input type="number" placeholder="Enter your phone number" required />
            <label>Preferred Date:</label>
            <input type="date" required />
            <label>Preferred Time:</label>
            <input type="time" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AppointmentForm;
