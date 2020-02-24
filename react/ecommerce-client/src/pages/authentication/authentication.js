import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import './authentication.sass';

const Authentication = () => {
  return (
    <div className="authentication">
      <h2>Sign in or Sign up</h2>
      <SignIn />
    </div>
  );
};

export default Authentication;
