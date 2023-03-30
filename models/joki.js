'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Joki extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Joki.belongsToMany(models.Akun, { through: models.Jadwal});
      Joki.belongsToMany(models.Jam, { through: models.Jadwal});
    }
  }
  Joki.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty.",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Age can not be empty.",
        },
      },
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Phone can not be empty.",
          },
        },
      },
    address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Address can not be empty.",
          },
        },
      },
    image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Image can not be empty.",
          },
        },
      },
    status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Status can not be empty.",
          },
        },
      },
  }, {
    sequelize,
    modelName: 'Joki',
  });
  return Joki;
};