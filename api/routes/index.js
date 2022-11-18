const bodyParser = require("body-parser");
const usuarios = require("./usuariosRoute");
const clientes = require("./clienteRoute");
const produtos = require("./produtoRoute");
const vendas = require("./vendaRoute");
const entregas = require("./entregaRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), usuarios, clientes, produtos, vendas, entregas);
};
