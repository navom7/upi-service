const dbConfig = require('../config/dbConfig')

const { DataTypes } = require('sequelize')

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      // operatorAliases: false,
      // pool: {
      //     max: dbConfig.pool.max
      // }
  });

  try {
sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize

db.upi = require('./upi.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db















