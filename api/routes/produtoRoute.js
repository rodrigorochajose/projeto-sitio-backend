const { Router } = require("express");
const produtoController = require("../controllers/produtoController");

const router = Router();

router
  .get("/produtos", produtoController.buscarTodosProdutos)
  .get("/produto/:id", produtoController.buscarProduto)
  .post("/produto/novo", produtoController.criarProduto)
  .put("/produto/atualiza/:id", produtoController.atualizarProduto)
  .delete("/produto/deleta/:id", produtoController.deletarProduto);

module.exports = router;
