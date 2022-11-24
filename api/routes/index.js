const bodyParser = require("body-parser");
const usuarios = require("./usuariosRoute");
const clientes = require("./clienteRoute");
const produtos = require("./produtoRoute");
const vendas = require("./vendaRoute");
const entregas = require("./entregaRoute");
const cors = require("cors");

module.exports = (app) => {
  app.use("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");

    res.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    );
    app.use(cors());
    next();
  });

  app.use(bodyParser.json(), usuarios, clientes, produtos, vendas, entregas);
};
