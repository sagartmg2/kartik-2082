import { Request, Response, NextFunction } from "express";
import productService from "../services/productService";

const productController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let page: number = (req.query.page as unknown as number) || 1;
      let limit: number = (req.query.limit as unknown as number) || 10;

      let data = await productService.get(req);
      res.send({
        page: page,
        limit,
        data: data.rows,
      });
    } catch (err) {
      next(err);
    }
  },
  getSingleProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = await productService.getSingleProduct(req);
      res.send({
        data: data,
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
