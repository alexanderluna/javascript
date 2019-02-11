import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { fetchStream, match: { params } } = this.props;
    fetchStream(params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.videoPlayer.destroy();
  }


  buildPlayer() {
    const { stream, match: { params } } = this.props;
    if (this.videoPlayer || !stream) {
      return;
    }

    this.videoPlayer = new flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${params.id}.flv`,
    });
    this.videoPlayer.attachMediaElement(this.videoRef.current);
    this.videoPlayer.load();
  }

  render() {
    const { stream } = this.props;
    return (
      <div>
        {!stream && <h2>Loading...</h2>}
        <video
          ref={this.videoRef}
          style={{ width: '100%' }}
          controls
        />
        {stream && <h2>{stream.title}</h2>}
      </div>
    );
  }
}

StreamShow.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  stream: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ])).isRequired,
};

StreamShow.defaultProps = {
  stream: null,
};

const mapStateToProps = (state, ownProps) => (
  { stream: state.streams[ownProps.match.params.id] }
);

export default connect(
  mapStateToProps,
  { fetchStream },
)(StreamShow);
