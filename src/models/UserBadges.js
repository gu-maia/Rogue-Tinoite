const { Model, DataTypes } = require('sequelize')

class UserBadge extends Model {
  static init (sequelize) {
    super.init({
      user_id: DataTypes.INTEGER,
      badge_id: DataTypes.INTEGER,
      sta_active: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = UserBadge
