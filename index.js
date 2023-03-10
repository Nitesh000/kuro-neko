import express from "express";
import cors from "cors";
const app = express();

// importring routes
import anime from "./route/anime.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/anime", anime);

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
