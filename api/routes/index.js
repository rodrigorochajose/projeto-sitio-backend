const bodyParser = require("body-parser");
const usuarios = require("./usuariosRoute");
const clientes = require("./clienteRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(usuarios);
  app.use(clientes);
};
