const express = require("express");
const dotenv = require("dotenv");
const patientsRouter = require("./api/fetch/fetch.router.js");

const app = express();

app.use(express.json());

//configure environmental variables
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/api/fetch", patientsRouter);

app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`);
});
