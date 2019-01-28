import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import StreamItem from './helper/StreamItem';

class StreamIndex extends Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  }

  render() {
    const { streams, user } = this.props;
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {streams.map(stream => (
            <StreamItem
              key={stream.id}
              stream={stream}
              isAdmin={user === stream.userId}
            />
          ))}
        </div>
        {user && (
          <div style={{ textAlign: 'right' }}>
            <Link to="/streams/new" className="ui button purple">
              Create Stream
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.stream),
  user: state.auth.userId,
});

StreamIndex.propTypes = {
  user: PropTypes.string,
  fetchStreams: PropTypes.func.isRequired,
  streams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

StreamIndex.defaultProps = {
  user: '3948938748334534',
};

export default connect(mapStateToProps, { fetchStreams })(StreamIndex);
