const database = require("../models");

class produtoController {
  static async buscarTodosProdutos(req, res) {
    try {
      const todosProdutos = await database.Produtos.findAll();
      return res.status(200).json(todosProdutos);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async buscarProduto(req, res) {
    const { id } = req.params;
    try {
      const produtoBusca = await database.Produtos.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(produtoBusca);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async criarProduto(req, res) {
    const novoProduto = req.body;
    try {
      const produtoCriado = await database.Produtos.create(novoProduto);
      return res.status(200).json(produtoCriado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizarProduto(req, res) {
    const { id } = req.params;
    const dados = req.body;
    try {
      await database.Produtos.update(dados, { where: { id: Number(id) } });
      const produtoAtualizado = await database.Produtos.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(produtoAtualizado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async deletarProduto(req, res) {
    const { id } = req.params;
    try {
      await database.Produtos.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Produto Deletado." });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = produtoController;
