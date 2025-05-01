'use strict';
const {Model, Validator} = require('sequelize');
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
  User.init({
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      verify: {
        len: [2,50],
        isNotEmail(val) {
          if (Validator.isEmail(val)) throw new Error("Username cannot be an email")
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    hashedPass: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};