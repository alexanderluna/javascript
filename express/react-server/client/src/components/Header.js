import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="navigation">
    <Link to={props.auth ? '/surveys' : '/'} >
      Emaily
    </Link>
    <ul>
      <li>
        {!props.auth && <a href="/auth/google">Login with Google</a>}
        {props.auth && <a href="/api/logout">Logout</a>}
      </li>
      <li>
      </li>
    </ul>
  </div>
)

const mapStateToProps = ({ auth }) => (
  { auth }
)

export default connect(mapStateToProps)(Header);
