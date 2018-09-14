const AuthorResolver = {
  Query: {
    author: async (parent, { id }, { models }) => {
        return await models.Author.findById(id);
      },
      authors: async (parent, { id }, { models }) => {
        return await models.Author.findAll();
      }
  },
  Author: {
    books: async (author, args, { models }) => {
      return await models.Book.findAll({
        where: { authorId: author.id }
      });
    }
  },
  Mutation: {
    addAuthor: async (parent, { name, age }, { models }) => {
      return await models.Author.create({ name, age });
    }
  }
};

export default AuthorResolver;