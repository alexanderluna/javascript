import React, { Component } from 'react';

export class ErrorMessage extends Component {
    render() {
        return (
            <div className="ui error message">
                <div className="header">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ErrorMessage;
