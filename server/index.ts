import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import { registerRoutes } from "./routes.js";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

registerRoutes(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server running on", PORT));
