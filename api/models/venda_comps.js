"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Venda_Comps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Venda_Comps.belongsTo(models.Produtos, {
        foreignKey: "produto_id",
      });
      Venda_Comps.belongsTo(models.Vendas, {
        foreignKey: "venda_id",
      });
    }
  }
  Venda_Comps.init(
    {
      quantidade: DataTypes.INTEGER,
      valor: DataTypes.FLOAT,
      data_venda: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Venda_Comps",
    }
  );
  return Venda_Comps;
};
