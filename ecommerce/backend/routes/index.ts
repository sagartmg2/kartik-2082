import { Router } from "express";

import authRoute from "./auth";
import productRoute from "./product";
import { checkAuthentication, checkSeller } from "../middlewares/auth";
import SellerRoutes from "./seller";
import Category from "../models/Category";
import { title } from "node:process";
import Cart from "../models/Cart";
import Product from "../models/Product";
import User from "../models/User";
const router = Router();

router.use("/auth", authRoute);

router.use("/products", productRoute);

router.post("/carts", checkAuthentication, async (req, res, next) => {
  try {
    let existingCartItem = await Cart.findOne({
      where: {
        userId: req.user?.id,
        productId: req.body.productId,
      },
    });

    if (existingCartItem) {
      await existingCartItem.update({
        quantity: existingCartItem.getDataValue("quantity") + 1,
      });
    } else {
      let data = await Cart.create({
        userId: req.user?.id,
        productId: req.body.productId,
        quantity: 1,
      });
    }

    res.send({
      data: {
        msg: "cart updated",
      },
    });
  } catch (err) {
    next(err);
  }
});

router.get("/carts", checkAuthentication, async (req, res, next) => {
  try {
    let data = await Cart.findAll({
      include: {
        model: Product,
        as: "product",
        include: [
          {
            model: User,
            as: "seller",
            attributes:["id","firstName"]
          },
        ],
      },
      where: {
        userId: req.user?.id,
      },
    });

    res.send({
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/categories", async (req, res, nex) => {
  let data = await Category.create({
    title: req.body.title,
    parentId: req.body.parentId,
  });
  res.send(data);
});

interface Category {
  id: number;
  title: string;
  parentId: number | null;
  childrens?: Category[];
}

router.get("/categories", async (req, res, nex) => {
  let data = (await Category.findAll({
    raw: true,
  })) as unknown as Category[];

  /* 
   {
            "id": 1,
            "title": "furniture",
            "parentId": null,
            "createdAt": "2026-02-06T02:42:40.578Z",
            "updatedAt": "2026-02-06T02:42:40.578Z"
        },
        {
            "id": 4,
            "title": "chair",
            "parentId": 1,
            "createdAt": "2026-02-06T02:43:04.793Z",
            "updatedAt": "2026-02-06T02:43:04.793Z"
        },
         */
  /* 
    let categories: any = [];
    data.forEach((cat) => {
      // @ts-ignore
      if (cat.parentId == null) {
        let childrens: any = [];
        data.forEach((childCat) => {
          // @ts-ignore
          if (childCat.parentId == cat.id) {

            childrens.push(childCat);
          }
        });
        // categories.push({ ...cat, childrens });
        categories.push({ ...cat, childrens });
      }
    });
   */

  const createTree = (parentId: number | null) => {
    let categories: Category[] = [];
    data.forEach((cat) => {
      if (cat.parentId == parentId) {
        let childrens = createTree(cat.id);
        categories.push({ ...cat, childrens });
      }
    });
    return categories;
  };

  let categories = createTree(null);

  res.send({
    data: categories,
  });
});

// router.get("/dashbarod", checkAuthentication, () => {
//   // dashboard
// });
// router.use("/seller/product", checkAuthentication, productRoute);
// router.use("/seller/orders", checkAuthentication, productRoute);

router.use("/seller", checkAuthentication, checkSeller, SellerRoutes);

export default router;
