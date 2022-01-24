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
    await queryInterface.bulkInsert('contents_books', [{

      id: 1,
      contents_id: 1,
      book_id: 1

    },{

      id: 2,
      contents_id: 2,
      book_id: 2

    },{

      id: 3,
      contents_id: 3,
      book_id: 3

    }
    /*
    ,{

      id: 4,
      contents_id: 2,
      book_id: 4,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{
      id: 5,
      contents_id: 3,
      book_id: 5,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    },{

      id: 6,
      contents_id: 3,
      book_id: 4,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 7,
      contents_id: 4,
      book_id: 3,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 8,
      contents_id: 5,
      book_id: 2,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 9,
      contents_id: 6,
      book_id: 1,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{

      id: 10,
      contents_id: 7,
      book_id: 2,
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
    await queryInterface.bulkDelete('contents_books', null, {});
  }
};
