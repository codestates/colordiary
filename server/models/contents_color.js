'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents_color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contents_color.init({
    contents_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contents_color',
  });
  return contents_color;
};