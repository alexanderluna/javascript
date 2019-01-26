import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import StreamItem from './helper/StreamItem';

export class StreamIndex extends Component {

    componentDidMount = () => {
        this.props.fetchStreams();
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.props.streams.map(stream =>
                        <StreamItem key={stream.id} stream={stream} />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.stream) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamIndex)
