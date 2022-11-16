const { Router } = require("express");
const vendaController = require("../controllers/vendaController");

const router = Router();

router.post("/venda", vendaController.geraNovaVenda);

module.exports = router;
