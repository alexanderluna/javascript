import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/beer.svg';
import './styles.sass';
import { auth } from '../../firebase';

const Header = ({ currentUser }) => (
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
      {currentUser && (
        <Link to="#" className="item" onClick={() => auth.signOut()}>
          Sign Out
        </Link>
      )}
      {!currentUser && (
        <Link to="/signin" className="item">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
