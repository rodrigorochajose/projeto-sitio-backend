"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Venda_Comp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Venda_Comp.belongsToMany(models.Produtos, {
        through: "Venda_Comp_Produtos",
      });
      Venda_Comp.belongsTo(models.Vendas, {
        foreignKey: "venda_comp_id",
      });
    }
  }
  Venda_Comp.init(
    {
      quantidade: DataTypes.INTEGER,
      valor: DataTypes.FLOAT,
      data_venda: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Venda_Comp",
    }
  );
  return Venda_Comp;
};
