'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('icons', [{

      id: 1,
      iconName: 'amazing'
      
    },{

      id: 2,
      iconName: 'great'
      
    },{

      id: 3,
      iconName: 'normal'
      
    },{

      id: 4,
      iconName: 'angry'
      
    },{

      id: 5,
      iconName: 'sad'
      
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('icons', null, {});
  }
};
