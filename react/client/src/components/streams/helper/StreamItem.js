import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class StreamItem extends Component {

    canEditAndDelete = () => {
        const { currentUser, stream } = this.props;
        if (currentUser === stream.userId) {
            return true
        }
    }
    render() {
        const { stream, canEdit } = this.props;
        return (
            <div className="item">
                {canEdit &&
                    <div className="right floated content">
                        <Link to="/streams/edit" className="ui button primary">
                            Edit
                        </Link>
                        <Link to="/streams/edit" className="ui button negative">
                            Delete
                        </Link>
                    </div>
                }
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamItem
