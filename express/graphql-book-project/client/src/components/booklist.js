import React, { Component } from 'react';
import { getBooks } from '../queries/queries';
import { graphql } from 'react-apollo';
import Details from '../views/Details';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  displayBooks(books) {
    return (books.map(book => {
      return (
        <li
          key={book.id}
          onClick={(e) => this.setState({selected: book.id})}
          >
          {book.name}
        </li>
      )
    }))
  }
  render() {
    const { loading, books } = this.props.data;
    const { selected } = this.state;
    return (
      <div className="books-box">
        <h2>Book List</h2>
        <ul className="booklist">
          { loading && <h2>Loading books</h2>}
          { books && this.displayBooks(books)}
        </ul>
        { selected && <h3>Clear Selection</h3>}
        { selected && <Details book={selected}/>}
        { !selected && <h2>Select a Book</h2>}
      </div>
    )
  }
}

export default graphql(getBooks)(BookList);