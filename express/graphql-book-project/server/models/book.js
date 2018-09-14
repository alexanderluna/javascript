const book = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    name: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
  });

  Book.associate = models => {
    Book.belongsTo(models.Author);
  };
  return Book;
};

export default book;