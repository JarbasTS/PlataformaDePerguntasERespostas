const Sequelize = require('sequelize');

const connection = new Sequelize('projeto1','root','Seumadruga123',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;