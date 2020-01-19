const { Model, DataTypes } = require('sequelize')

class Gender extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      sta_active: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Gender
