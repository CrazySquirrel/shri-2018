import Sequelize from 'sequelize';
import scheme from './scheme';

const Op = Sequelize.Op;

const sequelize = new Sequelize('ya_conversation', 'User', 'Letmein', {
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: 'db.sqlite3',
  operatorsAliases: { $and: Op.and },
  logging: false
});

scheme(sequelize)
sequelize.authenticate()
         .then(() => console.log('success'))
         .catch(error => console.log('error:', error));

sequelize.sync();

const models = sequelize.models;

export { sequelize, models };