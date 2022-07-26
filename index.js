import express from "express";
import handleRoutes from "./src/routes";
require("dotenv").config();

const app = express();
handleRoutes(app);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
