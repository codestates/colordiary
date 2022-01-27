'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
<<<<<<< HEAD:server/migrations/20220126083830-create-user-info.js
    await queryInterface.createTable('userInfos', {
=======
    await queryInterface.createTable('contents', {
>>>>>>> 9342f6fafe461d35d15d36f256172d1238bdfaf3:server/migrations/03-create-contents.js
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD:server/migrations/20220126083830-create-user-info.js
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      mobile: {
=======
      message: {
        type: Sequelize.STRING
      },
      moodDate: {
>>>>>>> 9342f6fafe461d35d15d36f256172d1238bdfaf3:server/migrations/03-create-contents.js
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
<<<<<<< HEAD:server/migrations/20220126083830-create-user-info.js
    await queryInterface.dropTable('userInfos');
=======
    await queryInterface.dropTable('contents');
>>>>>>> 9342f6fafe461d35d15d36f256172d1238bdfaf3:server/migrations/03-create-contents.js
  }
};