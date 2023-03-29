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
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Joki',
  });
  return Joki;
};