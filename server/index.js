const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server starts on this post: ${PORT}`);
});
