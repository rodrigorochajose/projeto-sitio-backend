const { Router } = require("express");
const usuarioController = require("../controllers/usuarioController");

const router = Router();

router.get("/usuarios", usuarioController.buscarTodosUsuarios);

router.get("/usuario/:id", usuarioController.buscarUsuario);

router.post("/novoUsuario", usuarioController.criarUsuario);

router.put("/atualizaUsuario/:id", usuarioController.atualizarUsuario);

router.delete("/deletaUsuario/:id", usuarioController.deletarUsuario);

module.exports = router;
