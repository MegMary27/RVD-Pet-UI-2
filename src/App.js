import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignInSignUpForm from './components/SignInSignUpForm';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import Services from './components/Services';
import FoodAndAccessories from './components/FoodAndAccessories';
import Footer from './components/Footer';
import UserDetails from './components/UserDetails'; // Import the new UserDetails component
import UserDashboard from './components/UserDashboard'; // Import the UserDashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<SignInSignUpForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/food" element={<FoodAndAccessories />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/dashboard" element={<UserDashboard />} /> {/* Add UserDashboard route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
