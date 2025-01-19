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
  
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
  
    if (signUpError) {
      setMessage(signUpError.message);
      return;
    }
  
    if (signUpData.user) {
      // Insert user into the custom users table
      const { error: insertError } = await supabase.from('users').insert({
        id: signUpData.user.id,
        email: signUpData.user.email,
        full_name: fullName,
      });
  
      if (insertError) {
        setMessage(insertError.message);
      } else {
        setMessage('Sign-up successful! Confirmation email sent.');
      }
    }
  };
  

  const handleSignIn = async (e) => {
  e.preventDefault();

  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    setMessage(signInError.message);
    return;
  }

  if (signInData.user) {
    // Check if user exists in users table
    const { data: userData, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('id', signInData.user.id);

    if (fetchError) {
      setMessage(fetchError.message);
      return;
    }

    if (!userData.length) {
      // If user doesn't exist in users, insert them
      const { error: insertError } = await supabase.from('users').insert({
        id: signInData.user.id,
        email: signInData.user.email,
        full_name: signInData.user.user_metadata?.full_name || null,
      });

      if (insertError) {
        setMessage(insertError.message);
        return;
      }
    }

    setMessage('Successfully signed in.');
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
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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