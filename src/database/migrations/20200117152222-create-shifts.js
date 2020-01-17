'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('shifts', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        shift_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sta_active: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      }
    );

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('shifts');

  }
};
