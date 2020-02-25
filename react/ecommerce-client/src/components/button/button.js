import React from 'react';
import './button.sass';

const Button = ({ children, ...props }) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default Button;
