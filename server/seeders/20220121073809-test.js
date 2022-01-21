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
      },
      {
        username: 'kate',
        password: 'katecheerup12',
        email: 'katekate@gmail.com',
        mobile: 1012345622,
        createdAt:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }], {});
    
      await queryInterface.bulkInsert('contents', [{
        content: '오늘은 기분이 너무 좋다! 프로젝트가 끝났기 때문이다!',
        color_id: 23,
        userInfo_id: 1,
        createdAt:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

      },{
        content: '알고리즘 공부는 왜 이렇게 즐거운걸까? 너무 재밌다!',
        color_id: 70,
        userInfo_id: 2,
        createdAt:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }], {});
  },


};
