'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('contents', 'icon_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('contents', {
      fields: ['icon_id'],
      type: 'foreign key',
      name: 'icon_id-in-contents', 
      references: {
        table: 'icons',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('contents', 'icon_id-in-contents');
    await queryInterface.removeColumn('contents', 'icon_id');
  }
};
