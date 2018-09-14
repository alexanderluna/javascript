const BookResolver = {
  Query: {
    book: async (parent, { id }, { models }) => {
        return await models.Book.findById(id);
      },
      books: async (parent, args, { models }) => {
        return await models.Book.findAll();
      }
  },
  Book: {
    author: async (book, args, { models }) => {
      return await models.Author.findById(book.authorId);
    }
  },
  Mutation: {
    addBook: async (parent, { name, genre, authorId }, { models }) => {
      return await models.Book.create({ name, genre, authorId });
    }
  }
};

export default BookResolver;