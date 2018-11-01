const author = (sequelize, DataTypes) => {
    const Author = sequelize.define('author', {
        name: { type: DataTypes.STRING },
        age: { type: DataTypes.INTEGER },
    });

    Author.associate = models => {
        Author.hasMany(models.Book, { onDelete: 'CASCADE' });
    };

    Author.findByLogin = async login => {
        let author = await Author.findOne({ where: { name: login } });

        // if (!author) {
        //     author = await Author.findOne({ where: { email: login } });
        // }
        return author;
    };

    return Author;
};

export default author;