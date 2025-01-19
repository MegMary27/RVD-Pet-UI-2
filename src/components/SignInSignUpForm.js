import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import './SignInSignUpForm.css';
import { useNavigate } from 'react-router-dom';

function SignInSignUpForm() {
  const [formType, setFormType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const toggleForm = (type) => {
    setFormType(type);
    setMessage('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Create a new user in the Supabase authentication system
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }, // Save full name in user metadata
      },
    });

    if (signUpError) {
      setMessage(`Error during sign-up: ${signUpError.message}`);
    } else if (signUpData.user) {
      setMessage('Sign-up successful! Please check your email for confirmation.');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Sign in using email and password
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setMessage(`Error during sign-in: ${signInError.message}`);
    } else if (signInData.user) {
      setMessage('Sign-in successful!');
      navigate('/dashboard');
    }
  };

  return (
    <section id="signin">
      <div className="container">
        <h2>{formType === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
        <div className="form-container">
          {formType === 'signin' && (
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={() => toggleForm('signup')}>
                  Sign Up
                </a>
              </p>
            </form>
          )}
          {formType === 'signup' && (
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
}

export default SignInSignUpForm;
