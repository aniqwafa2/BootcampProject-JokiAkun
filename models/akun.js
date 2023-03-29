'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Akun extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Akun.belongsToMany(models.Joki, { through: models.Jadwal});
      Akun.belongsToMany(models.Jam, { through: models.Jadwal});
    }
  }
  Akun.init({
    name: DataTypes.STRING,
    gameID: DataTypes.STRING,
    server: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Akun',
  });
  return Akun;
};