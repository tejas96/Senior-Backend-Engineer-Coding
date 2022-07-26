const express = require("express");

const route = express.Router();

route.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = route;
