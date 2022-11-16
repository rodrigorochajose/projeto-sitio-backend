const database = require("../models");
const sequelize = require("sequelize");

class vendaController {
  static async geraNovaVenda(req, res) {
    const {
      cliente_id,
      usuario_id,
      data_venda = sequelize.fn("NOW"),
      total,
      total_original,
      pago,
      produto_id,
    } = req.body;

    const dadosVenda = {
      cliente_id,
      usuario_id,
      data_venda,
      total,
      total_original,
      pago,
    };

    try {
      const vendaGerada = await database.Vendas.create(dadosVenda);
      return res.status(200).json(vendaGerada);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = vendaController;
