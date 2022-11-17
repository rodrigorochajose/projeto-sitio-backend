const { Router } = require("express");
const clienteController = require("../controllers/clienteController");

const router = Router();

router
  .get("/clientes", clienteController.buscarTodosClientes)
  .get("/cliente/:id", clienteController.buscarCliente)
  .post("/cliente/novo", clienteController.criarCliente)
  .put("/cliente/atualiza:id", clienteController.atualizarCliente)
  .delete("/cliente/deleta:id", clienteController.deletarCliente);

module.exports = router;
