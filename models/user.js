'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.associate = function(models) {
    User.hasMany(models.ToDos, {
      foreignKey: 'userId',
      as: 'todos'
    })
  }

  User.init({
    code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};