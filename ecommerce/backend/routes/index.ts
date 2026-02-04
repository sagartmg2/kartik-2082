import { Router } from "express";

import authRoute from "./auth";
import productRoute from "./product";
import { checkAuthentication, checkSeller } from "../middlewares/auth";
import SellerRoutes from "./seller";
const router = Router();

router.use("/auth", authRoute);

router.use("/products", productRoute);

// router.get("/dashbarod", checkAuthentication, () => {
//   // dashboard
// });
// router.use("/seller/product", checkAuthentication, productRoute);
// router.use("/seller/orders", checkAuthentication, productRoute);

router.use("/seller", checkAuthentication, checkSeller, SellerRoutes);

export default router;
