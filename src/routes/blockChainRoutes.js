const express = require("express");
const { blockChainController } = require("../controller");
const route = express.Router();

route.get("/ping", (req, res) => {
  res.send("pong");
});

route.get("/retrieveTransactions", blockChainController.retrieveTransactions);

module.exports = route;
