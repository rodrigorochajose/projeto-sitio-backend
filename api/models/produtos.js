"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.belongsToMany(models.Venda_Comp, {
        through: "Venda_Comp_Produtos",
      });
    }
  }
  Produtos.init(
    {
      descricao: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      estoque: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Produtos",
    }
  );
  return Produtos;
};
