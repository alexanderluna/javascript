import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from '../components/booklist';
import AddBook from '../components/addBook';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' })

class Home extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Home</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default Home;