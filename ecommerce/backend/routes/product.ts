import { Router } from "express";
import { checkAuthentication } from "../middlewares/auth";
import productController from "../controllers/product";

const router = Router();

router.get("/", productController.get);

export default router;
