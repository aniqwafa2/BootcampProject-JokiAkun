"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jam.belongsToMany(models.Joki, { through: models.Jadwal });
      Jam.belongsToMany(models.Akun, { through: models.Jadwal });
    }
  }
  Jam.init(
    {
      sesi: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Sesi can not be empty.",
          },
        },
      },
      jam: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Jam can not be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Jam",
    }
  );
  return Jam;
};
