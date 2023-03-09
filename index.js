const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
// importing routes
const anime = require("./routes/anime");

export const BASEURL = "https://api.consumet.org";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/anime", anime);

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
