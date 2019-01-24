import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import ErrorMessage from '../ErrorMessage';

export class StreamCreate extends Component {

    renderInput = ({ input, label, meta: { touched, error } }) => {
        const className = `field ${touched && error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input type="text"{...input} autoComplete="off" />
                {touched && error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
        )
    }

    onSubmit = (formProps) => {
        this.props.createStream(formProps);
    }

    render() {
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
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
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}


const required = field => value =>
    value ? undefined : `${field} can't be blank`;
const minLength = min => value =>
    value && value.length < min ? `Must be at least ${min} characters` : undefined
const minLength10 = minLength(10);
const minLength20 = minLength(20);
const requiredTitle = required("title");
const requiredDescription = required("description");

const formWrapped = reduxForm({
    form: 'streamCreate',
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
