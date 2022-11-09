const express = require("express");
const dotenv = require("dotenv");
const router = require("../routes/index.js");

dotenv.config();
const app = express();

router(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
