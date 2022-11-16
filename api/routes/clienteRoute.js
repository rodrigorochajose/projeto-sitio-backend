const { Router } = require("express");
const clienteController = require("../controllers/clienteController");

const router = Router();

router
  .get("/clientes", clienteController.buscarTodosClientes)
  .get("/cliente/:id", clienteController.buscarCliente)
  .post("/novoCliente", clienteController.criarCliente)
  .put("/atualizaCliente/:id", clienteController.atualizarCliente)
  .delete("/deletaCliente/:id", clienteController.deletarCliente);

module.exports = router;
