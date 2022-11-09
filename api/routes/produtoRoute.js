const { Router } = require("express");
const produtoController = require("../controllers/produtoController");

const router = Router();

router.get("/produtos", produtoController.buscarTodosProdutos);

router.get("/produto/:id", produtoController.buscarProduto);

router.post("/novoProduto", produtoController.criarProduto);

router.put("/atualizaProduto/:id", produtoController.atualizarProduto);

router.delete("/deletaProduto/:id", produtoController.deletarProduto);

module.exports = router;
