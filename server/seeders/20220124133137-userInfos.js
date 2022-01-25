'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('userInfos', [{
      username: 'soyoung',
      password: 's1o2y3n4n6hg',
      email: 'soyoung93104@gmail.com',
      mobile: 1075101234,
      createdAt:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    },{
      username: 'boyoung',
      password: 'boyoungcheerup12',
      email: 'green123@gmail.com',
      mobile: 1012345671,
      createdAt:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    }])
  
    }
};
