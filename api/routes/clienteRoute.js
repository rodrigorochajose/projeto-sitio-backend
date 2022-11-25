const { Router } = require("express");
const clienteController = require("../controllers/clienteController");

const router = Router();

router
  .get("/clientes", clienteController.buscarTodosClientes)
  .get("/cliente/:id", clienteController.buscarCliente)
  .post("/cliente/novo", clienteController.criarCliente)
  .put("/cliente/atualizar/:id", clienteController.atualizarCliente)
  .delete("/cliente/deletar/:id", clienteController.deletarCliente);

module.exports = router;
