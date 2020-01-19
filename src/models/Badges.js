const { Model, DataTypes } = require('sequelize')

class Badge extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      sta_active: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Badge
