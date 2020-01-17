'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('genders', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          references: {
            model: {
              tableName: 'genders',
              schema: 'public',
            },
            key: 'id',
          }
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sta_active: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
    },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('genders');

  }
};
