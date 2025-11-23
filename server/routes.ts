import { Express } from "express";
import userRoutes from "./controllers/user.controller.js";
import jobRoutes from "./controllers/job.controller.js";
import bidRoutes from "./controllers/bid.controller.js";
import reviewRoutes from "./controllers/review.controller.js";
import technicianRoutes from "./controllers/technician.controller.js";
import walletRoutes from "./controllers/wallet.controller.js";

import {
  insertUserSchema,
  insertJobSchema,
  insertBidSchema,
  insertReviewSchema,
  insertTechnicianSchema
} from "./shared/schema.js";

export function registerRoutes(app: Express) {
  // USERS
  app.use("/api/users", userRoutes);

  // JOBS
  app.use("/api/jobs", jobRoutes);

  // BIDS
  app.use("/api/bids", bidRoutes);

  // REVIEWS
  app.use("/api/reviews", reviewRoutes);

  // TECHNICIANS
  app.use("/api/technicians", technicianRoutes);

  // WALLET
  app.use("/api/wallet", walletRoutes);
}
