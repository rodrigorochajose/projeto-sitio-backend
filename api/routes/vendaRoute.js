const { Router } = require("express");
const vendaController = require("../controllers/vendaController");

const router = Router();

router
  .get("/vendas", vendaController.buscarVendas)
  .get("/venda/:id", vendaController.buscarVenda)
  .post("/venda/nova", vendaController.geraNovaVenda)
  .put("/venda/atualizar/:id", vendaController.atualizarVenda);
module.exports = router;
