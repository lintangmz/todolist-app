'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ToDos.associate = function(models) {
    ToDos.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users'
    })
  }

  ToDos.init({
    userId: DataTypes.INTEGER,
    task: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ToDos',
  });
  return ToDos;
};