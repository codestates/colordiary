'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('colors', [{

      id: 1,
      colorname: '빨강'
    },{

      id: 2,
      colorname: '주황'

    },{

      id: 3,
      colorname: '노랑'

    },{

      id: 4,
      colorname: '초록'

    },{

      id: 5,
      colorname: '파랑'
    
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('colors', null, {});
  }
};
