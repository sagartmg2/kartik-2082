import { Router } from "express";
import productController from "../../controllers/product";

const router = Router();

router.get("/", productController.getSellerProducts);
router.post("/", productController.create);

export default router;
