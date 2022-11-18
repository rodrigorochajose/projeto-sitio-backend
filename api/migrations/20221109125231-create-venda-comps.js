"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Venda_Comps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      venda_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Vendas", key: "id" },
      },
      produto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Produtos", key: "id" },
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      data_venda: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Venda_Comps");
  },
};
