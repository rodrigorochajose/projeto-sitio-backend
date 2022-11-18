const { Router } = require("express");
const entregaController = require("../controllers/entregaController");

const router = Router();

router
  .get("/entregas", entregaController.buscarTodasEntregas)
  .get("/entrega/:id", entregaController.buscarEntrega)
  .post("/entrega/nova", entregaController.criarEntrega)
  .put("/entrega/atualizar/:id", entregaController.atualizarEntrega);
module.exports = router;
