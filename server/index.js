require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server started"));
  } catch (error) {
    console.log(error);
  }
};

start();
