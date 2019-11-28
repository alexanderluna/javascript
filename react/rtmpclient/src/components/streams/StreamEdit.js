import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './partials/StreamForm';

class StreamEdit extends Component {
  componentWillMount() {
    const { fetchStream, match: { params } } = this.props;
    fetchStream(params.id);
  }

  onSubmit = (formValues) => {
    const { match: { params } } = this.props;
    this.props.editStream(params.id, formValues);
  }

  render() {
    const { stream } = this.props;
    return (
      <div>
        <h3>Edit Stream</h3>
        {stream && (
          <StreamForm
            initialValues={_.pick(stream, ['title', 'description'])}
            onSubmit={this.onSubmit}
          />
        )}
        {!stream && <h3>Loading...</h3>}
      </div>
    );
  }
}

StreamEdit.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  editStream: PropTypes.func.isRequired,
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

StreamEdit.defaultProps = {
  stream: null,
};

const mapStateToProps = (state, ownProps) => (
  { stream: state.streams[ownProps.match.params.id] }
);

export default connect(
  mapStateToProps,
  { fetchStream, editStream },
)(StreamEdit);
