import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/beer.svg';
import './header.sass';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="menu">
      <Link to="/shop" className="item">
        Shop
      </Link>
      <Link to="/conctact" className="item">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
