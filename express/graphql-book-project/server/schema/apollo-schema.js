import { gql } from 'apollo-server-express';
import Author from '../models/author';
import Book from '../models/book';

const typeDefs = gql `
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    age: Int
    name: String
    books: [Book]
  }

  type Query {
    author(id: ID!): Author
    authors: [Author]
    book(id: ID!): Book
    books: [Book]
  }

  type Mutation {
    addBook(name: String!, genre: String!, authorId: ID!): Book
    addAuthor(name: String!, age: Int!): Author
  }
`;

const resolvers = {
  Query: {
    author(root, args, context, info) {
      console.log(args);
      return Author.findById(args.id);
    },
    authors(root, args, context, info) {
      return Author.find();
    },
    book(root, args, context, info) {
      return Book.findById(args.id);
    },
    books(root, args, context, info) {
      return Book.find();
    }
  },
  Author: {
    books(author) {
      return Book.find({ authorId: author.id });
    }
  },
  Book: {
    author(book) {
      return Author.findById(book.authorId);
    }
  },
  Mutation: {
    addBook: (parent, { name, genre, authorId }) => {
      const book = new Book({ name, genre, authorId });
      return book.save();
    },
    addAuthor: (parent, { name, age }) => {
      const author = new Author({ name, age });
      return author.save();
    }
  }
}

export { typeDefs, resolvers };