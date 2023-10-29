import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { PORT } from "./config/index.js";
import { authRoutes, userRoutes, postRoutes } from "./routes/index.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
