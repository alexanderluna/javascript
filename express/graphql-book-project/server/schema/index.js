import { gql } from 'apollo-server-express';
import AuthorSchema from './author'
import BookSchema from './book';

const LinkSchema = gql `
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [LinkSchema, AuthorSchema, BookSchema];