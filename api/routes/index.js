const bodyParser = require("body-parser");
const usuarios = require("./usuariosRoute");
const clientes = require("./clienteRoute");
const produtos = require("./produtoRoute");
const vendas = require("./vendaRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), usuarios, clientes, produtos, vendas);
};
