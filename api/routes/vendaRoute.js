const { Router } = require("express");
const vendaController = require("../controllers/vendaController");

const router = Router();

router
  .get("/vendas", vendaController.buscarTodasVendas)
  .get("/venda/:id", vendaController.buscarVenda)
  .post("/venda/nova", vendaController.criaVenda)
  .put("/venda/atualizar/:id", vendaController.atualizarVenda);
module.exports = router;
