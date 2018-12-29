import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, onAuthChange } from '../actions';
import googleAuthentication from '../apis/googleAuthentication';

export class GoogleAuth extends Component {

    componentDidMount = async () => {
        this.auth = await googleAuthentication();
        this.props.onAuthChange();
        this.auth.isSignedIn.listen(this.props.onAuthChange);
    }

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();

    render() {
        return (
            <div>
                {this.props.isSignedIn &&
                    <button className="ui red google button" onClick={this.onSignOutClick}>
                        <i className="google icon" />
                        Logout
                    </button>
                }
                {!this.props.isSignedIn &&
                    <button className="ui red google button" onClick={this.onSignInClick}>
                        <i className="google icon" />
                        Sign in
                    </button>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps,
    { signIn, signOut, onAuthChange }
)(GoogleAuth);
