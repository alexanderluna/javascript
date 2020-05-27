import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { createEntry } from '../../actions';
import EntryForm from './partials/EntryForm';

const styles = {
  container: {
    padding: '4rem 0',
  },
};

class EntryCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createEntry(formValues);
  };

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm" className={classes.container}>
        <h3>Create Entry</h3>
        <EntryForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

const ReduxEntryCreate = connect(null, { createEntry })(EntryCreate);

export default withStyles(styles)(ReduxEntryCreate);
