import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './UserDashboard.css';

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [pets, setPets] = useState([]);
  const [message, setMessage] = useState('');
  const [formType, setFormType] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error('Error fetching user session:', error);
        setMessage('Authentication error. Please sign in again.');
      } else if (session?.user) {
        setUser(session.user);
      }
    };

    fetchUser();
  }, []);

  const fetchAppointments = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('user_id', user.id);

    if (error) setMessage(error.message);
    else setAppointments(data);
  };

  const fetchPets = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('pets')
      .select('*')
      .eq('user_id', user.id);

    if (error) setMessage(error.message);
    else setPets(data);
  };

  useEffect(() => {
    if (user) {
      fetchAppointments();
      fetchPets();
    }
  }, [user]);

  const handleAddPet = async (e) => {
    e.preventDefault();
  
    if (!user) {
      setMessage('You must be signed in to add pets.');
      return;
    }
  
    const formData = new FormData(e.target);
    const petData = {
      pet_name: formData.get('pet_name'),
      pet_breed: formData.get('pet_breed'),
      pet_age: formData.get('pet_age'),
      user_id: user.id, // Make sure this matches the logged-in user's ID.
    };
  
    const { error } = await supabase.from('pets').insert(petData);
    if (error) {
      setMessage(`Error: ${error.message}`);

    } else {
      setMessage('Pet added successfully!');
      fetchPets(); // Refresh pet list
    }
  };  

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const appointmentData = {
      pet_name: formData.get('pet_name'),
      preferred_date: formData.get('preferred_date'),
      preferred_time: formData.get('preferred_time'),
      user_id: user.id,
    };

    const { error } = await supabase.from('appointments').insert(appointmentData);
    if (error) setMessage(error.message);
    else {
      setMessage('Appointment booked successfully!');
      fetchAppointments();
    }
  };

  
  return (
    <div className="dashboard">
      <h2>Welcome, {user?.email}</h2>
      <h2>User Dashboard</h2>
      <button onClick={() => setFormType('addPet')}>Add Pet</button>
      <button onClick={() => setFormType('addAppointment')}>Make Appointment</button>
      <button onClick={() => setFormType('history')}>View History</button>
      {formType === 'addPet' && (
        <form onSubmit={handleAddPet}>
          <input type="text" name="pet_name" placeholder="Pet Name" required />
          <input type="text" name="pet_breed" placeholder="Pet Breed" />
          <input type="number" name="pet_age" placeholder="Pet Age" />
          <button type="submit">Save</button>
        </form>
      )}
      {formType === 'addAppointment' && (
        <form onSubmit={handleAddAppointment}>
          <input type="text" name="pet_name" placeholder="Pet Name" required />
          <input type="date" name="preferred_date" required />
          <input type="time" name="preferred_time" required />
          <button type="submit">Book Appointment</button>
        </form>
      )}
      {formType === 'history' && (
        <div>
          <h3>Appointments</h3>
          <ul>
            {appointments.map((appt) => (
              <li key={appt.id}>
                {appt.pet_name} - {appt.preferred_date} at {appt.preferred_time}
              </li>
            ))}
          </ul>
          <h3>Pets</h3>
          <ul>
            {pets.map((pet) => (
              <li key={pet.id}>
                {pet.pet_name} - {pet.pet_breed} ({pet.pet_age} years)
              </li>
            ))}
          </ul>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserDashboard;
