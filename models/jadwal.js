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
    JokiId: DataTypes.INTEGER,
    AkunId: DataTypes.INTEGER,
    JamId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (jadwal, option) => {
        jadwal.JokiId = Number(jadwal.JokiId);
        jadwal.AkunId = Number(jadwal.AkunId);
        jadwal.JamId = Number(jadwal.JamId);
      }
    },
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};