const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/Users')
const Like = require('../models/Likes')

const connection = new Sequelize(dbConfig)

User.init(connection)
Like.init(connection)

module.exports = connection
