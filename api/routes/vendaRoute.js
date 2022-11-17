const { Router } = require("express");
const vendaController = require("../controllers/vendaController");

const router = Router();

router.post("/venda/nova", vendaController.geraNovaVenda);

module.exports = router;
