const database = require("../models");

class usuarioController {
  static async buscarTodosUsuarios(req, res) {
    try {
      const todosUsuarios = await database.Usuarios.findAll({
        attributes: [
          "id",
          "apelido",
          "login",
          "ativo",
          "createdAt",
          "updatedAt",
        ],
        order: ["id"],
      });
      return res.status(200).json(todosUsuarios);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async buscarUsuario(req, res) {
    const { id } = req.params;
    try {
      const usuario = await database.Usuarios.findOne({
        where: { id: Number(id) },
      });

      usuario.senha = undefined;

      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async criarUsuario(req, res) {
    const novoUsuario = req.body;
    console.log(novoUsuario);
    try {
      const usuarioCriado = await database.Usuarios.create(novoUsuario);

      usuarioCriado.senha = undefined;

      return res.status(200).json(usuarioCriado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async atualizarUsuario(req, res) {
    const { id } = req.params;
    const dados = req.body;
    try {
      await database.Usuarios.update(dados, { where: { id: Number(id) } });
      const usuarioAtualizado = await database.Usuarios.findOne({
        where: { id: Number(id) },
      });
      usuarioAtualizado.senha = undefined;
      res.status(200).json(usuarioAtualizado);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async deletarUsuario(req, res) {
    const { id } = req.params;
    try {
      await database.Usuarios.destroy({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "Usuário deletado." });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

module.exports = usuarioController;
