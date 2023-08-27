"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Akun extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Akun.belongsToMany(models.Joki, { through: models.Jadwal });
      Akun.belongsToMany(models.Jam, { through: models.Jadwal });
    }
  }
  Akun.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can not be empty.",
          },
        },
      },
      gameID: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "gameID can not be empty.",
          },
        },
      },
      server: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Server can not be empty.",
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
    },
    {
      sequelize,
      modelName: "Akun",
    }
  );
  return Akun;
};
