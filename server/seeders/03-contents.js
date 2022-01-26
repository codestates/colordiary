'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('contents', [{

      id: 1,
      message: '개미는 뚠뚠',
      moodDate: '2022-02-01',
      icon_id: 1,
      userInfo_id: 1,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 2,
      message: '오늘도 뚠뚠',
      moodDate: '2022-02-01',
      icon_id: 2,
      userInfo_id: 2,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 3,
      message: '열심히 일을 하네 뚠뚠',
      moodDate: '2022-02-01',
      icon_id: 3,
      userInfo_id: 3,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    }
    /*
    ,{

      id: 4,
      message: '아기상어 뚜루루뚜루',
      icon_id: 4,
      userInfo_id: 2,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 5,
      message: '귀여운 뚜루루뚜루',
      icon_id: 5,
      userInfo_id: 3,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    },{

      id: 6,
      message: '바닷속 뚜루루뚜루',
      icon_id: 5,
      userInfo_id: 3,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      
    }
    */
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('contents', null, {});
  }
};
