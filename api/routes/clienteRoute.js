const { Router } = require("express");
const clienteController = require("../controllers/clienteController");

const router = Router();

router.get("/clientes", clienteController.buscarTodosClientes);

router.get("/cliente/:id", clienteController.buscarCliente);

router.post("/novoCliente", clienteController.criarCliente);

router.put("/atualizaCliente/:id", clienteController.atualizarCliente);

router.delete("/deletaCliente/:id", clienteController.deletarCliente);

module.exports = router;
