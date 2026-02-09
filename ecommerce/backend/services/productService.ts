import { Request } from "express";
import Product from "../models/Product";
import User from "../models/User";
import Category from "../models/Category";
import { Op } from "sequelize";

import fs from "fs";
import path from "path";
import ProductImage from "../models/ProductImage";

const productService = {
  get: async (req: Request) => {
    let searchText: string = (req.query.q as string)?.trim() || "";
    let priceFrom: number = (req.query.priceFrom as unknown as number) || 0;
    let priceTo: number =
      (req.query.priceTo as unknown as number) || 9999999999999;
    let page: number = (req.query.page as unknown as number) || 1;
    let limit: number = (req.query.limit as unknown as number) || 10;

    let offset = (page - 1) * limit;

    let order: [string, string] = ["title", "ASC"];

    let sortBy: string = req.query.sort as string;
    console.log({ sortBy });

    switch (sortBy) {
      case "priceAsc": {
        order = ["price", "ASC"];
        break;
      }
      case "priceDesc": {
        order = ["price", "DESC"];
        break;
      }
      case "createdAtDesc": {
        order = ["createdAt", "DESC"];
        break;
      }
    }

    console.log(order);
    return await Product.findAndCountAll({
      include: [
        {
          model: User,
          as: "seller",
          attributes: ["id", "email"],
        },
        {
          model: Category,
          as: "categories",
          attributes: ["id", "title"],
        },
        {
          model: ProductImage,
          as: "images",
          attributes: ["path"],
        },
      ],
      attributes: {
        exclude: ["userId", "updatedAt"],
      },
      // attributes: ["id","title",other fields....]
      where: {
        title: {
          [Op.iLike]: `%${searchText}%`,
        },
        price: {
          [Op.gte]: priceFrom,
          [Op.lte]: priceTo,
        },
      },
      limit: limit,
      offset: offset,
      order: [order],
    });
  },
  getSingleProduct: async (req: Request) => {
    console.log(req.params.id);

    // return await Product.findOne({
    //   where:{
    //     id: 26
    //   },
    let id = req.params.id as unknown as number ;

    return await Product.findByPk(id, {
      include: [
        {
          model: User,
          as: "seller",
          attributes: ["id", "email"],
        },
        {
          model: Category,
          as: "categories",
          attributes: ["id", "title"],
        },
        {
          model: ProductImage,
          as: "images",
          attributes: ["path"],
        },
      ],
      attributes: {
        exclude: ["userId", "updatedAt"],
      },
    });
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
    console.log(req.body.categoryIds);

    let product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      userId: req.user?.id,
      stock: req.body.stock,
    });

    //  @ts-ignore
    await product.addCategories(req.body.categoryIds);

    const files = req.files as Express.Multer.File[];
    console.log(files);

    files?.forEach((file) => {
      // console.log(file.mimetype);
      // @ts-ignore
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      let pathname = path.join("uploads", uniqueSuffix + file.originalname);
      console.log(pathname);
      fs.writeFileSync(pathname, file.buffer);

      ProductImage.create({
        productId: product.getDataValue("id"),
        path: pathname,
      });
    });

    return product;
  },
};

export default productService;
