import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("seller product fetched..");
});

router.post("/", (req, res) => {
  res.send("seller product create");
});

export default router;
