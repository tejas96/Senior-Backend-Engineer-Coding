import { Router } from "express";
import { blockChainController } from "../controller";
const route = Router();

route.get("/ping", (req, res) => {
  res.send("pong");
});

route.get("/retrieveTransactions", blockChainController.retrieveTransactions);

export default route;
