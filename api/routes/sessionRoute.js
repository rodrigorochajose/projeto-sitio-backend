const { Router } = require("express");
const SessionController = require("../controllers/sessionController");
const cors = require("cors");

const router = Router();

router.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  router.use(cors());

  next();
});

router.post("/login", SessionController.efetuarLogin);

module.exports = router;
