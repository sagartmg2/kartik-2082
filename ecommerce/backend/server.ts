import "dotenv/config";
import express, { Response } from "express";
import cors from "cors";

import appRoutes from "./routes";
import "./connections/database";
import "./models/index";

import resourceNotFoundHandler from "./middlewares/resourceNotFoundHandler";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json()); // global middleware

app.use("/uploads", express.static("uploads"));

app.use("/api", appRoutes);

app.get("/", (req, res: Response) => {
  res.send("welcome");
});

app.use(resourceNotFoundHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("server started");
});

// User.has
