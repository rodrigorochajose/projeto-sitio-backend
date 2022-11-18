"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Vendas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: { model: "Clientes", key: "id" },
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: "Usuarios", key: "id" },
      },
      data_venda: {
        type: Sequelize.DATEONLY,
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      total_original: {
        type: Sequelize.FLOAT,
      },
      pago: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Vendas");
  },
};
