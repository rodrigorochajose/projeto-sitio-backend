const database = require("../models");

class entregaController {
  static async buscarTodasEntregas(req, res) {
    try {
      const todosEntregas = await database.Entregas.findAll({
        order: ["id"],
      });
      return res.status(200).json(todosEntregas);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async buscarEntrega(req, res) {
    const { id } = req.params;
    try {
      const entregaBusca = await database.Entregas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(entregaBusca);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async criarEntrega(req, res) {
    const novaEntrega = req.body;
    try {
      const entregaCriada = await database.Entregas.create(novaEntrega);
      return res.status(200).json(entregaCriada);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizarEntrega(req, res) {
    const { id } = req.params;
    const dados = req.body;
    try {
      await database.Entregas.update(dados, { where: { id: Number(id) } });
      const entregaAtualizada = await database.Entregas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(entregaAtualizada);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = entregaController;
