import React, { useState } from 'react';
import Button from '../button/button';
import { signInWithGoogle } from '../../firebase'
import './sign-in.sass';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>Sign in</h2>
      <span>sign in with your email</span>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="sign-in-email">
          Email
          <input
            id="sign-in-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="sign-in-password">
          Password
          <input
            id="sign-in-password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit" value="submit">
          Sign in
        </Button>
        <Button type="button" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
