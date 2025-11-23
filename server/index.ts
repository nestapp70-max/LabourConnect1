import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db-storage.js";
import initSocket from "./chat.socket.js";
import router from "./routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Create HTTP Server
const server = http.createServer(app);

// Start Socket.IO
initSocket(server);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
