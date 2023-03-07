const PORT = process.env.PORT || 3004;
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(PORT, () => {
  console.log("server started on ", PORT);
});
