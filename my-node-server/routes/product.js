const express = require("express");
const Joi = require("joi");

const { checkAuthentication } = require("../middlewares/auth");
const { checkIsSeller } = require("../middlewares/role");
const router = express.Router();

const productCreateValidationSchema = Joi.object({
  title: Joi.string().alphanum().min(3).max(10).required(),
  price: Joi.number().min(0).required(),
});

let products = [
  {
    title: "mouse",
    price: 100000,
  },
];

router.get("/api/products", (req, res) => {
  // let products = DB::find("products")
  res.send(products);
});

router.post("/api/products", checkAuthentication, checkIsSeller, (req, res) => {
  let result = productCreateValidationSchema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });

  let error = result.error?.details.map((el) => {
    return {
      message: el.message,
      field: el.context.key,
    };
  });

  if (error) {
    return res.status(400).send(error);
  }

  products.push(req.body);
  res.send("product created");
});

// default export
module.exports = router;
