import React, { useState } from 'react';
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
import UserDetails from './components/UserDetails'; // Import UserDetails component
import UserDashboard from './components/UserDashboard'; // Import UserDashboard component
import Animation from './components/Animation'; // Import renamed Animation component

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  // Hide animation after it completes
  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <Router>
      <div className="App">
        {showAnimation ? (
          <Animation onComplete={handleAnimationComplete} />
        ) : (
          <>
            {/* Static Components */}
            <Header />
            <Navbar />

            {/* Routes for Navigation */}
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/signin" element={<SignInSignUpForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/appointment" element={<AppointmentForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/food" element={<FoodAndAccessories />} />
              <Route path="/user-details" element={<UserDetails />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
