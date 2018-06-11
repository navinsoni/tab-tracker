const fs = require('fs')
const path = require('path')
const config = require('../config/config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

const db = {}

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    console.log('abc123', file)
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequalize = sequelize
db.Sequelize = Sequelize

module.exports = db
