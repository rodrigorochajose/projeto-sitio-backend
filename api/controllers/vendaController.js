const database = require("../models");
const sequelize = require("sequelize");

// as entregas são feitas todas as sextas feiras, então ao gerar uma entrega, gerar para a próxima sexta da data atual
function buscaProximaSexta() {
  const data = new Date();

  const proximaSexta = new Date(
    data.setDate(data.getDate() + ((7 - data.getDay() + 5) % 7 || 7))
  );

  return proximaSexta;
}

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
      endereco,
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

      const dadosEntrega = {
        venda_id: vendaGerada.id,
        endereco,
        data_entrega: buscaProximaSexta(),
        entregue: false,
      };

      const entregaGerada = await database.Entregas.create(dadosEntrega);
      return res.status(200).json(vendaGerada, entregaGerada);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = vendaController;
