const { Router } = require("express");
const produtoController = require("../controllers/produtoController");

const router = Router();

router
  .get("/produtos", produtoController.buscarTodosProdutos)
  .get("/produto/:id", produtoController.buscarProduto)
  .post("/produto/novo", produtoController.criarProduto)
  .put("/produto/atualizar/:id", produtoController.atualizarProduto)
  .delete("/produto/deletar/:id", produtoController.deletarProduto);

module.exports = router;
