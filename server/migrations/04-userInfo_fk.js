'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('contents', 'userInfo_id', Sequelize.INTEGER);

    await queryInterface.addConstraint('contents', {
      fields: ['userInfo_id'],
      type: 'foreign key',
      name: 'userInfo_id-in-contents',
      references: {
        table: 'userInfos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('contents', 'userInfo_id-in-contents');
    await queryInterface.removeColumn('contents', 'userInfo_id');
  }
};
