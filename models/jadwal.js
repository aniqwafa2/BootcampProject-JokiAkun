'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jadwal.belongsTo(models.Jam);
      Jadwal.belongsTo(models.Akun);
      Jadwal.belongsTo(models.Joki);
    }
  }
  Jadwal.init({
    JokiId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "JokiId can not be empty.",
        },
      },
    },
    AkunId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "AkunId can not be empty.",
        },
      },
    },
    JamId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "JamId can not be empty.",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};