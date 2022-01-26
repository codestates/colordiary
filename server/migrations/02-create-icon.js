'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('icons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iconName: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('icons');
  }
};