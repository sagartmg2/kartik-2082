import { Response, Router } from "express";

import authRoute from "./auth";
import productRoute from "./product";
import { checkAuthentication, checkSeller } from "../middlewares/auth";
import SellerRoutes from "./seller";
import Category from "../models/Category";
import { title } from "node:process";
import Cart from "../models/Cart";
import Product from "../models/Product";
import User from "../models/User";
import Order from "../models/Order";
import OrderItem from "../models/OrderItem";
const router = Router();
import crypto from "crypto";
import axios from "axios";
import { Op } from "sequelize";

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

router.put("/carts/:id", checkAuthentication, async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body.quantity);
  let cartId = req.params.id as unknown as number;
  // return;
  try {
    let existingCartItem = await Cart.findByPk(cartId);

    existingCartItem?.update({
      quantity: req.body.quantity,
    });

    // 404 in case not found

    res.send({
      data: {
        msg: "cart updated",
      },
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/carts/:id", checkAuthentication, async (req, res, next) => {
  try {
    let cartId = req.params.id as unknown as number;

    let existingCartItem = await Cart.findByPk(cartId);

    if (existingCartItem) {
      await existingCartItem.destroy();
    } else {
      // 404
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
            attributes: ["id", "firstName"],
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

interface OrderItem {
  productId: number;
  quantity: number;
}

const genEsewaSignature = (totalAmout: number, uuid: string) => {
  const message = `total_amount=${totalAmout},transaction_uuid=${uuid},product_code=EPAYTEST`;
  const hashInBase64 = crypto
    .createHmac("sha256", process.env.ESEWA_SECRET as string)
    .update(message)
    .digest("base64");

  return hashInBase64;
};

router.post("/orders", checkAuthentication, async (req, res, next) => {
  // apply db: transitions

  let reference = "ORD-" + new Date().getFullYear() + "-" + Date.now();
  let order = await Order.create({
    userId: req.user?.id,
    reference,
  });

  let orderItems: OrderItem[] = req.body.orderItems;

  let totalAmount = 0;

  for (const orderItem of orderItems) {
    let product = await Product.findByPk(orderItem.productId);

    let productPrice = product?.getDataValue("price");
    totalAmount += productPrice * orderItem.quantity;
    await OrderItem.create({
      orderId: order.getDataValue("id"),
      productId: orderItem.productId,
      quantity: orderItem.quantity,
      price: productPrice,
      productName: product?.getDataValue("title"),
      productDescription: product?.getDataValue("shortDescription"),
    });

    product?.update({
      quantity: orderItem.quantity,
    });
  }

  res.send({
    data: order,
    esewa: {
      tax_amount: 0,
      total_amount: totalAmount,
      transaction_uuid: reference,
      product_code: "EPAYTEST",
      product_service_charge: 0,
      product_delivery_charge: 0,
      success_url: "https://localhost:3000/order/OrderItemREF/success",
      failure_url: "https://developer.esewa.com.np/failure",
      signed_field_names: "total_amount,transaction_uuid,product_code",
      signature: genEsewaSignature(totalAmount, reference),
    },
  });
});

router.get("/orders", checkAuthentication, async (req, res: Response, next) => {
  Order.findAll({
    where: {
      status: "pending",
    },
  });
});

router.get(
  "/orders/history",
  checkAuthentication,
  async (req, res: Response, next) => {
    Order.findAll({
      where: {
        status: {
          [Op.in]: ["done", "rejected", "refund"],
        },
      },
    });
  },
);

router.post("/orders/verification", async (req, res: Response, next) => {
  let token = req.body.token.trim();

  const decoded = Buffer.from(decodeURIComponent(token), "base64").toString(
    "utf8",
  );

  const json = JSON.parse(decoded);
  console.log(json);

  try {
    let response = await axios.get(
      `${process.env.ESEWA_VERIFICATION_URL}?product_code=EPAYTEST&total_amount=${json.total_amount}&transaction_uuid=${json.transaction_uuid}`,
    );

    if (response.data.status == "COMPLETE") {
      let order = await Order.findOne({
        where: {
          reference: json.transaction_uuid,
        },
      });
      console.log(order);

      await order?.update({
        paymentStatus: "done",
      });
    }
    res.send({
      msg: "success",
    });
  } catch (err) {}

  // axios
  //   .get(
  //     `${process.env.ESEWA_VERIFICATION_URL}?product_code=EPAYTEST&total_amount=${json.total_amount}&transaction_uuid=${json.transaction_uuid}`,
  //   )
  //   .then(async(res) => {
  //     console.log(res.data);

  //   });

  // const cleanBase64 = token.replace(/\s+/g, "");
  // const decodedString = Buffer.from(cleanBase64, "base64").toString("utf8");
  // const json = JSON.parse(decodedString);
  // console.log(json);
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
