const { Router } = require("express");
const produtoController = require("../controllers/produtoController");

const router = Router();

router
  .get("/produtos", produtoController.buscarTodosProdutos)
  .get("/produto/:id", produtoController.buscarProduto)
  .post("/novoProduto", produtoController.criarProduto)
  .put("/atualizaProduto/:id", produtoController.atualizarProduto)
  .delete("/deletaProduto/:id", produtoController.deletarProduto);

module.exports = router;
