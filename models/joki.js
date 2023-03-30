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
    phone:{
       type: DataTypes.STRING,
       validate: {
        notEmpty: true
        }
      },
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (joki, option) => {
        joki.imgae = "https://placehold.co/600x400.png";
        joki.status = 1;
      }
    },
    sequelize,
    modelName: 'Joki',
  });
  return Joki;
};