import { Router } from "express";
import ProductRoute from "./product";
import OrderRoute from "./order";

const router = Router();

router.use("/products", ProductRoute);
router.use("/orders", OrderRoute);

export default router;
