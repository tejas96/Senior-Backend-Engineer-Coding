const express = require("express");
const handleRoutes = require("./src/routes");
require("dotenv").config();

const app = express();
handleRoutes(app);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
