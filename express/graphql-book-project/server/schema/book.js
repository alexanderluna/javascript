import { gql } from 'apollo-server-express';

const BookSchema = gql `
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  extend type Query {
    book(id: ID!): Book
    books: [Book]
  }

  extend type Mutation {
    addBook(name: String!, genre: String!, authorId: ID!): Book
  }
`;

export default BookSchema;