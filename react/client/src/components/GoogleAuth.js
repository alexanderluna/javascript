import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

export class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '175356046310-9q1dofrd1goven8tg5shunhgdl3umh03.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else
            this.props.signOut();
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

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
