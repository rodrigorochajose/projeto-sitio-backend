const { Router } = require("express");
const usuarioController = require("../controllers/usuarioController");

const router = Router();

router
  .get("/usuarios", usuarioController.buscarTodosUsuarios)
  .get("/usuario/:id", usuarioController.buscarUsuario)
  .post("/usuario/novo", usuarioController.criarUsuario)
  .put("/usuario/atualiza/:id", usuarioController.atualizarUsuario)
  .delete("/usuario/deleta/:id", usuarioController.deletarUsuario);

module.exports = router;
