'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokumentasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dokumentasi.init({
    name: DataTypes.STRING,
    harga: DataTypes.NUMBER,
    keterangan: DataTypes.STRING,
    CategoryId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Dokumentasi',
  });
  return Dokumentasi;
};