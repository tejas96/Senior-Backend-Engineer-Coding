import blockChainRoutes from "./blockChainRoutes";

const handleRoutes = (app) => {
  app.use("/block-chain", blockChainRoutes);
};

export default handleRoutes;
