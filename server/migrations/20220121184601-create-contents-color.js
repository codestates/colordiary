'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contents_colors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contents_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'contents'
          },
          key: 'id'
        },
        allowNull: false
      },
      color_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'colors'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contents_colors');
  }
};