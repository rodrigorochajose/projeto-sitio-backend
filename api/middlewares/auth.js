const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Nenhum Token foi enviado" });

  const partes = authHeader.split(" ");

  if (!partes.length === 2)
    return res.status(401).json({ error: "Erro no Token" });

  const [palavra, token] = partes;

  if (!/^Bearer$/i.test(palavra))
    return res.status(401).json({ error: "Token não corresponde ao padrão" });

  jwt.verify(token, process.env.SALT, (err) => {
    if (err) return res.status(401).json({ error: "Token inválido" });

    next();
  });
};
