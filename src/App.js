import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { supabase } from './components/supabaseClient';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignInSignUpForm from './components/SignInSignUpForm';
import About from './components/About';
import Services from './components/Services';
import FoodAndAccessories from './components/FoodAndAccessories';
import UserDashboard from './components/UserDashboard';
import DoctorsDashboard from './components/DoctorDashboard'; // Import new dashboard
import Footer from './components/Footer';
import Animation from './components/Animation';

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [session, setSession] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) console.error('Error fetching session:', error);
      else setSession(data?.session);
    };

    fetchSession();
  }, []);

  return (
    <Router>
  <div className="App">
    {showAnimation ? (
      <Animation onComplete={() => setShowAnimation(false)} />
    ) : (
      <>
        <Header />
        <Navbar user={session?.user} setMessage={setMessage} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<SignInSignUpForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/food" element={<FoodAndAccessories />} />
          {session?.user?.email === 'meghna.p@btech.christuniversity.in' ? (
            <Route path="/doctor-dashboard" element={<DoctorsDashboard />} />
          ) : (
            <Route
              path="/dashboard"
              element={<UserDashboard message={message} setMessage={setMessage} />}
            />
          )}
        </Routes>
        <Footer />
      </>
    )}
  </div>
</Router>

  );
};

export default App;  