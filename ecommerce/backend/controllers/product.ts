import { Request, Response, NextFunction } from "express";
import productService from "../services/productService";

const productController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let products = await productService.get(req);
      res.send({
        data: products,
      });
    } catch (err) {
      next(err);
    }
  },
  getSellerProducts: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      let products = await productService.getSellerProducts(req);
      res.send({
        data: products,
      });
    } catch (err) {
      next(err);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let product = await productService.create(req);
      res.send({
        data: product,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default productController;
