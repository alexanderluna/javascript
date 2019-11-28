import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './partials/StreamForm';

class StreamCreate extends Component {
  onSubmit = (formProps) => {
    this.props.createStream(formProps);
  }

  render() {
    return (
      <div className="">
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

StreamCreate.propTypes = {
  createStream: PropTypes.func.isRequired,
};

export default connect(null, { createStream })(StreamCreate);
