const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
   super.init({
     name: DataTypes.STRING,
     email: DataTypes.STRING,
     birth_date: DataTypes.DATE,
     password: DataTypes.STRING,
     gender_id: DataTypes.INTEGER,
     sta_active: DataTypes.STRING,
     sta_receive_notifications: DataTypes.STRING,
   }, {
     sequelize
   })
 }
}

module.exports = User;
