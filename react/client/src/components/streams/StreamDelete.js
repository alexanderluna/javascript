import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import Modal from './partials/Modal';

class StreamDelete extends Component {
  componentDidMount() {
    const { fetchStream, match: { params } } = this.props;
    fetchStream(params.id);
  }

  get actions() {
    const { deleteStream, match: { params } } = this.props;
    return (
      <div>
        <button
          type="button"
          className="ui button negative"
          onClick={() => deleteStream(params.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="ui button"
          onClick={() => history.push('/')}
        >
          Cancel
        </button>
      </div>
    );
  }

  get contentText() {
    const { stream } = this.props;
    return (
      `Are you sure you want to delete the stream:
      "${stream.title.toUpperCase()}"`
    );
  }

  render() {
    const { stream } = this.props;
    return (
      <div>
        {!stream && <h2>Loading...</h2>}
        {stream && (
          <Modal
            title="Delete Stream"
            content={this.contentText}
            actions={this.actions}
            onDismiss={() => history.push('/')}
          />
        )}
      </div>
    );
  }
}

StreamDelete.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  deleteStream: PropTypes.func.isRequired,
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

StreamDelete.defaultProps = {
  stream: null,
};

const mapStateToProps = (state, ownProps) => (
  { stream: state.streams[ownProps.match.params.id] }
);

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream },
)(StreamDelete);
