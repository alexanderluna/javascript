import React, { Component } from 'react';
import { getAuthors, addBook, getBooks } from '../queries/queries';
import { graphql, compose } from 'react-apollo';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    }
    this.handleForm = this.handleForm.bind(this);
  }
  displayAuthors(authors) {
    return authors.map(author => {
      const { id, name } = author;
      return (<option key={id} value={id}>{name}</option>)
    })
  }
  handleForm(event) {
    const variables = this.state;
    this.props.addBook({
      variables,
      refetchQueries: [{ query: getBooks }]
    })
    event.preventDefault();
  }
  render() {
    const { authors } = this.props.getAuthors;
    return (
      <form id="add-book" onSubmit={ this.handleForm }>
        <div className="field">
          <label>Book Name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({name: e.target.value})}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={(e) => this.setState({genre: e.target.value})}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => this.setState({authorId: e.target.value})}>
            <option>Select Author</option>
            { authors && this.displayAuthors(authors)}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getAuthors, { name: "getAuthors" }),
  graphql(addBook, { name: "addBook" })
)(AddBook);