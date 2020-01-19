const { Model, DataTypes } = require('sequelize')

class Like extends Model {
  static init (sequelize) {
    super.init({
      matcher_id: DataTypes.INTEGER,
      matched_id: DataTypes.INTEGER,
      sta_like: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Like
