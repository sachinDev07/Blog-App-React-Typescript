import express from "express";
import cors from "cors";

import { PORT } from "./config/index.js";
import { authRoutes, userRoutes, postRoutes } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
