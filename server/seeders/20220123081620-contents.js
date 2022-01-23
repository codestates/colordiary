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
    await queryInterface.bulkInsert('contents', [{

      id: 1,
      content: '개미는 뚠뚠',
      color_id: 1,
      userInfo_id: 1,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 2,
      content: '오늘도 뚠뚠',
      color_id: 2,
      userInfo_id: 1,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 3,
      content: '열심히 일을 하네 뚠뚠',
      color_id: 3,
      userInfo_id: 2,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 4,
      content: '아기상어 뚜루루뚜루',
      color_id: 4,
      userInfo_id: 2,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 5,
      content: '귀여운 뚜루루뚜루',
      color_id: 5,
      userInfo_id: 3,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 6,
      content: '바닷속 뚜루루뚜루',
      color_id: 5,
      userInfo_id: 3,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('People', null, {});
  }
};
