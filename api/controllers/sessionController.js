const database = require("../models");
const jwb = require("jsonwebtoken");

class SessionController {
  static async efetuarLogin(req, res) {
    try {
      const { login, senha } = req.body;

      const usuario = await database.Usuarios.findOne({
        where: {
          login,
        },
      });

      if (!usuario)
        return res.status(400).send({ error: "Login não encontrado" });

      if (!(senha === usuario.senha))
        return res.status(400).send({ error: "Senha incorreta" });

      const token = jwb.sign({ id: usuario.id }, process.env.SALT, {
        expiresIn: 86400,
      });

      usuario.senha = undefined;

      res.send({ usuario, token });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

module.exports = SessionController;
