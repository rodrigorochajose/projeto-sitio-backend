import express from "express";
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota de teste OK" });
});

export default router;
