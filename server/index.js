const express = require("express");
require("dotenv").config();

const app = express();
const sequelize = require("./db");

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server starts on this post: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
