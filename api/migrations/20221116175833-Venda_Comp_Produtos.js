"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Venda_Comp_Produtos", {
      produto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      venda_comp_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
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
    await queryInterface.dropTable("Venda_Comp_Produtos");
  },
};
