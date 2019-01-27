import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import StreamItem from './helper/StreamItem';

export class StreamIndex extends Component {

    componentDidMount = () => {
        this.props.fetchStreams();
    }

    render() {
        const { streams, user } = this.props;
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {streams.map(stream =>
                        <StreamItem
                            key={stream.id}
                            stream={stream}
                            canEdit={user === stream.userId ? true : false}
                        />
                    )}
                </div>
                {user &&
                    <div style={{ textAlign: 'right' }}>
                        <Link to="/streams/new" className="ui button purple">
                            Create Stream
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.stream),
        user: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamIndex)
