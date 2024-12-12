const {Sequelize, DataTypes} = require('sequelize')
const {development} = require('../../config/config')

const sequelize = new Sequelize(development)

db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Letter = require('./letter')(sequelize, DataTypes)

module.exports = db;