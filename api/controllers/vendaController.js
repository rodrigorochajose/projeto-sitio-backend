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
  static async criaVenda(req, res) {
    const {
      cliente_id,
      usuario_id,
      data_venda = sequelize.fn("NOW"),
      total,
      total_original,
      pago,
      produto_id,
      quantidade,
      endereco,
    } = req.body;

    try {
      const dadosVenda = {
        cliente_id,
        usuario_id,
        data_venda,
        total,
        total_original,
        pago,
      };

      const vendaGerada = await database.Vendas.create(dadosVenda);

      const produto_array = produto_id.split(",");
      const quantidade_array = quantidade.split(",");

      produto_array.forEach(async (produto_id, index) => {
        const valor = await database.Produtos.findOne({
          attributes: ["valor"],
          where: {
            id: Number(produto_id),
          },
        });

        await database.Venda_Comps.create({
          venda_id: vendaGerada.id,
          produto_id,
          quantidade: quantidade_array[index],
          valor: Number(valor.valor),
          data_venda,
        });
      });

      const dadosEntrega = {
        venda_id: vendaGerada.id,
        endereco,
        data_entrega: buscaProximaSexta(),
        entregue: false,
      };

      await database.Entregas.create(dadosEntrega);

      return res
        .status(200)
        .json({ message: `Venda ${vendaGerada.id} realizada com sucesso !` });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async buscarTodasVendas(req, res) {
    try {
      const todasVendas = await database.Vendas.findAll();

      return res.status(200).json(todasVendas);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async buscarVenda(req, res) {
    const { id } = req.params;
    try {
      const vendaBusca = await database.Vendas.findOne({
        where: {
          id: Number(id),
        },
      });
      const vendaCompBusca = await database.Venda_Comps.findAll({
        where: {
          venda_id: Number(id),
        },
      });
      return res.status(200).json({ vendaBusca, vendaCompBusca });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizarVenda(req, res) {
    const { id } = req.params;
    const dados = req.body;
    try {
      await database.Vendas.update(dados, {
        where: {
          id: Number(id),
        },
      });
      const vendaAtualizada = await database.Vendas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(vendaAtualizada);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = vendaController;
