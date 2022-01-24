'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contents_book.init({
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'books',
        },
        key: 'id'
      },
      allowNull: false
    },
    contents_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'contents',
        },
        key: 'id'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'contents_book',
  });
  return contents_book;
};