import React, { useState } from 'react';
import './SignInSignUpForm.css';

function SignInSignUpForm() {
  const [formType, setFormType] = useState('signin');

  const toggleForm = (type) => {
    setFormType(type);
  };

  return (
    <section id="signin">
      <div className="container">
        <h2>{formType === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
        <div className="form-container">
          {formType === 'signin' ? (
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={() => toggleForm('signup')}>
                  Sign Up
                </a>
              </p>
            </form>
          ) : (
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
              <p>
                Already have an account?{' '}
                <a href="#" onClick={() => toggleForm('signin')}>
                  Sign In
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignInSignUpForm;
