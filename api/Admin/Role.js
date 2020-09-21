const express = require("express");
const router = express.Router();

router.post("/name", (req, res, next) => {
  res.status(200).json("'data'");
});

module.exports = router;
