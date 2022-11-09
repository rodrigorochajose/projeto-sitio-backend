"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Vendas, {
        foreignKey: "cliente_id",
      });
    }
  }
  Clientes.init(
    {
      nome: DataTypes.STRING,
      telefone: DataTypes.STRING,
      endereco: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Clientes",
    }
  );
  return Clientes;
};
