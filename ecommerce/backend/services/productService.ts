import { Request } from "express";
import Product from "../models/Product";

const productService = {
  get: async (req: Request) => {
    return await Product.findAll();
  },
  getSellerProducts: async (req: Request) => {
    return await Product.findAll({
      where: {
        userId: req.user?.id,
      },
    });
  },
  //   req, req.user req.isSeller
  create: async (req: Request) => {
    return await Product.create({
      title: req.body.title,
      price: req.body.price,
      userId: req.user?.id,
      stock: req.body.stock,
    });
  },
};

export default productService;
