const PORT = process.env.PORT || 3004;
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected");
});

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hi1");
});
app.listen(PORT, () => {
  console.log("server started on ", PORT);
});
