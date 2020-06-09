import React from 'react';
import './styles.sass';

const Button = ({ children, secondary, ...props }) => (
  <button
    className={`${secondary ? 'secondary' : 'primary'} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
