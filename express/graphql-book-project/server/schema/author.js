import { gql } from 'apollo-server-express';

const AuthorSchema = gql `
  type Author {
    id: ID
    age: Int
    name: String
    books: [Book]
  }

  extend type Query {
    author(id: ID!): Author
    authors: [Author]
  }

  extend type Mutation {
    addAuthor(name: String!, age: Int!): Author
  }
`;

export default AuthorSchema;