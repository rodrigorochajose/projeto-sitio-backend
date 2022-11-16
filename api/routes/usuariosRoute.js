const { Router } = require("express");
const usuarioController = require("../controllers/usuarioController");

const router = Router();

router
  .get("/usuarios", usuarioController.buscarTodosUsuarios)
  .get("/usuario/:id", usuarioController.buscarUsuario)
  .post("/novoUsuario", usuarioController.criarUsuario)
  .put("/atualizaUsuario/:id", usuarioController.atualizarUsuario)
  .delete("/deletaUsuario/:id", usuarioController.deletarUsuario);

module.exports = router;
