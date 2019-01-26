import React, { Component } from 'react'

export class StreamItem extends Component {
    render() {
        return (
            <div className="item">
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {this.props.stream.title}
                    <div className="description">
                        {this.props.stream.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamItem
