import React, { Component } from 'react'

export class GoogleAuth extends Component {

    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '175356046310-9q1dofrd1goven8tg5shunhgdl3umh03.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    render() {
        return (
            <div>
                {this.state.isSignedIn &&
                    <button className="ui red google button" onClick={this.onSignOutClick}>
                        <i className="google icon" />
                        Logout
                    </button>
                }
                {!this.state.isSignedIn &&
                    <button className="ui red google button" onClick={this.onSignInClick}>
                        <i className="google icon" />
                        Sign in
                    </button>
                }
            </div>
        )
    }
}

export default GoogleAuth
