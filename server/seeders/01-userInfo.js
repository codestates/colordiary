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
    await queryInterface.bulkInsert('userInfos', [{

      id: 1,
      username: '박소영',
      password: 'p1a2r3k4',
      email: 'soyoung@test.com',
      mobile: '010-1234-1111',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{
      id: 2,
      username: '양보영',
      password: 'y1a2n3g4',
      email: 'boyoung@test.com',
      mobile: '010-1234-2222',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 3,
      username: '정선영',
      password: 'j1u2n3g4',
      email: 'sunyeong@test.com',
      mobile: '010-1234-3333',
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
    await queryInterface.bulkDelete('userInfos', null, {});
  }
};
