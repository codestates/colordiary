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
    await queryInterface.bulkInsert('books', [{
      id: 1,
      title: '잊어야 한다는 마음으로',
      writer: '아이유',
      userInfo_id: 1
    },{
      id: 2,
      title: '밤편지',
      writer: '아이유',
      userInfo_id: 2
    },{
      id: 3,
      title: '바람꽃',
      writer: '아이유',
      userInfo_id: 3
    }
    /*
    ,{
      id: 4,
      title: 'Free Sombody',
      writer: '루나',
      userInfo_id: '2'
    },{
      id: 5,
      title: 'Atlantis',
      writer: '샤이니',
      userInfo_id: '3'
    },{
      id: 6,
      title: '보라빛 밤',
      writer: '선미',
      userInfo_id: '3'
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
     await queryInterface.bulkDelete('books', null, {});
  }
};
