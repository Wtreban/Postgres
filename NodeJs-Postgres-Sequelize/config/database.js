const Sequelize = require('sequelize');
module.exports = new Sequelize('giggs', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres'
  });
  