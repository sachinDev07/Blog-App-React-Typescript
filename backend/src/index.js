import express from "express";
import { PORT } from "./config/index.js";

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
