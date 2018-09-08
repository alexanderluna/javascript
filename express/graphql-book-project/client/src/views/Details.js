import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBook } from '../queries/queries';

class Details extends Component {
  render() {
    const { book } = this.props.data;
    console.log(this.props);
    return (
      <div className="detail-view">
        { book &&
          <div>
            <h2>{book.name}</h2>
            <p>Genre: {book.genre}</p>
            <p>Author: {book.author.name}</p>
            <p>All Books by this Author</p>
            <ul>
              {
                book.author.books.map(book => {
                  return <li key={book.id}>{book.name}</li>
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default graphql(getBook, {
  options: (props) => {
    return {
      variables: {
        id: props.book
      }
    }
  }
})(Details);