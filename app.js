const express = require("express");
const mongoose = require("mongoose");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/news_explorer_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.err);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
