const database = require("../models");

class clienteController {
  static async buscarTodosClientes(req, res) {
    try {
      const todosClientes = await database.Clientes.findAll();
      return res.status(200).json(todosClientes);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async buscarCliente(req, res) {
    const { id } = req.params;
    try {
      const clienteBusca = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(clienteBusca);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async criarCliente(req, res) {
    const novoCliente = req.body;
    try {
      const clienteCriado = await database.Clientes.create(novoCliente);
      return res.status(200).json(clienteCriado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizarCliente(req, res) {
    const { id } = req.params;
    const dados = req.body;
    try {
      await database.Clientes.update(dados, { where: { id: Number(id) } });
      const clienteAtualizado = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(clienteAtualizado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async deletarCliente(req, res) {
    const { id } = req.params;
    try {
      await database.Clientes.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Cliente Deletado." });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = clienteController;
