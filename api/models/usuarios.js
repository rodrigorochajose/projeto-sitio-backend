"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Vendas, {
        foreignKey: "usuario_id",
      });
    }
  }
  Usuarios.init(
    {
      apelido: DataTypes.STRING,
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
