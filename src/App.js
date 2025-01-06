import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignInSignUpForm from './components/SignInSignUpForm';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import Services from './components/Services';
import FoodAndAccessories from './components/FoodAndAccessories';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <SignInSignUpForm />
      <About />
      <AppointmentForm />
      <Services />
      <FoodAndAccessories />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
