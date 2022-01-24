'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contents_books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'books',
          },
          key: 'id'
        },
        allowNull: false
      },
      contents_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'contents',
          },
          key: 'id'
        },
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contents_books');
  }
};