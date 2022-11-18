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
      Produtos.hasMany(models.Venda_Comps, {
        foreignKey: "produto_id",
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
