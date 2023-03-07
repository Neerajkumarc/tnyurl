const PORT = process.env.PORT || 3004;
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const shortUrlModel = require("./models/urlShortenerModel");

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected");
});

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    const shortUrl = await shortUrlModel.find({});
    res.render("index", { shortUrl: shortUrl });
  } catch (error) {
    res.json(error);
  }
});

app.post("/shortUrl", async (req, res) => {
  try {
    const shortUrl = await shortUrlModel.create({ fullUrl: req.body.fullUrl });
    res.render("short", { shortUrl: shortUrl });
  } catch (error) {
    res.json(error);
  }
});

app.get("/:shortUrlId", async (req, res) => {
  try {
    const shortUrl = await shortUrlModel.findOne({
      shortUrl: req.params.shortUrlId,
    });

    res.redirect(shortUrl.fullUrl);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log("server started on ", PORT);
});
