"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entregas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entregas.belongsTo(models.Vendas);
    }
  }
  Entregas.init(
    {
      data_entrega: DataTypes.DATEONLY,
      entregue: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Entregas",
    }
  );
  return Entregas;
};
