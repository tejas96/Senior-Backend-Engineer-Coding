const blockChainRoutes = require("./blockChainRoutes");

const handleRoutes = (app) => {
  app.use("/block-chain", blockChainRoutes);
};

module.exports = handleRoutes;
