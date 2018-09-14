const author = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    name: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
  });

  Author.associate = models => {
    Author.hasMany(models.Book, { onDelete: 'CASCADE' });
  };
  return Author;
};

export default author;