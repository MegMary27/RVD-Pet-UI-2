import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './DoctorDashboard.css'; // Optional: Add relevant styles here.

function DoctorsDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  // Fetch appointments and pets
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all appointments
        const { data: appointmentData, error: appointmentError } = await supabase
          .from('appointments') // Table name
          .select('*'); // Fetch all rows

        if (appointmentError) throw appointmentError;

        // Fetch all pets
        const { data: petData, error: petError } = await supabase
          .from('pets') // Table name
          .select('*'); // Fetch all rows

        if (petError) throw petError;

        console.log('Appointments:', appointmentData); // Debug log
        console.log('Pets:', petData); // Debug log

        // Map pet details into the appointments data
        const mergedData = appointmentData.map((appointment) => {
          const pet = petData.find((p) => p.id === appointment.id);
          return {
            ...appointment,
            pet_name: pet?.pet_name || 'N/A',
            pet_breed: pet?.pet_breed || 'N/A',
            pet_age: pet?.pet_age || 'N/A',
          };
        });

        setAppointments(mergedData);
        setPets(petData);
      } catch (error) {
        console.error('Error fetching data:', error); // Log detailed error
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <div className="appointments-section">
            <h3>Appointments</h3>
            {appointments.length > 0 ? (
              <table>
                <thead>
                  <tr>
    
                    <th>Pet Name</th>
                    
                    <th>Appointment Time</th>
                    <th>Appointment Date</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      
                      <td>{appointment.pet_name}</td>
                      <td>{appointment.preferred_time}</td>
                      
                      
                      <td>{appointment.preferred_date}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No appointments found.</p>
            )}
          </div>

          <div className="pets-section">
            <h3>Pet Details</h3>
            {pets.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Pet Name</th>
                    <th>Breed</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {pets.map((pet) => (
                    <tr key={pet.id}>
                      <td>{pet.pet_name}</td>
                      <td>{pet.pet_breed}</td>
                      <td>{pet.pet_age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No pets found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DoctorsDashboard;
