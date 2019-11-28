import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onAuthChange } from '../actions';
import googleAuthentication from '../apis/googleAuthentication';

class GoogleAuth extends Component {
  componentDidMount = async () => {
    this.auth = await googleAuthentication();
    this.props.onAuthChange();
    this.auth.isSignedIn.listen(this.props.onAuthChange);
  }

  onSignInClick = () => this.auth.signIn();

  onSignOutClick = () => this.auth.signOut();

  render() {
    const { isSignedIn } = this.props;
    return (
      <div>
        {isSignedIn && (
          <button
            type="button"
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            Logout
          </button>
        )}
        {!isSignedIn && (
          <button
            type="button"
            className="ui red google button"
            onClick={this.onSignInClick}
          >
            <i className="google icon" />
            Sign in
          </button>
        )}
      </div>
    );
  }
}

GoogleAuth.propTypes = {
  isSignedIn: PropTypes.bool,
  onAuthChange: PropTypes.func.isRequired,
};

GoogleAuth.defaultProps = {
  isSignedIn: false,
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { onAuthChange })(GoogleAuth);
