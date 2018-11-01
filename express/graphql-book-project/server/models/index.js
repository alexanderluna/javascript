import Sequelize from 'sequelize';
import config from '../config/config';

const sequelize = new Sequelize(
    config.DATABASE,
    config.DATABASE_USER,
    config.DATABASE_PASSWORD, {
        dialect: 'postgres',
        operatorsAliases: false,
    }
);

const models = {
    Author: sequelize.import('./author'),
    Book: sequelize.import('./book')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };
export default models;