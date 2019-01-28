import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import ErrorMessage from '../ErrorMessage';

const required = field => value => (
  value
    ? undefined
    : `${field} can't be blank`
);
const minLength = min => value => (
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined
);
const minLength10 = minLength(10);
const minLength20 = minLength(20);
const requiredTitle = required('title');
const requiredDescription = required('description');

class StreamCreate extends Component {
  renderInput = ({ input, label, meta: { touched, error } }) => {
    const className = `field ${touched && error ? 'error' : ''}`;
    return (
      <div className={className}>
        <label htmlFor="title" type="text">{label}</label>
        <input id="title" type="text" {...input} autoComplete="off" />
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }

  onSubmit = (formProps) => {
    this.props.createStream(formProps);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        name="create-form"
        className="ui form error"
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="title"
          validate={[requiredTitle, minLength10]}
        />
        <Field
          name="description"
          component={this.renderInput}
          label="description"
          validate={[requiredDescription, minLength20]}
        />
        <button type="submit" className="ui button primary">Submit</button>
      </form>
    );
  }
}

StreamCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createStream: PropTypes.func.isRequired,
};

const formWrapped = reduxForm({
  form: 'streamCreate',
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
