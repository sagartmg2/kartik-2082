import React, { useEffect, useState } from "react";
import api from "../api/axios";
import cartApi, { getCartItems } from "../api/cart.api";

interface CartItem {
  quantity: number;
  product: {
    title: string;
    price: number;
    stock: number;
  };
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // way 1
    // api
    //   .get("/carts")
    //   .then((res) => {})
    //   .catch((err) => {});

    // way 2
    // getCartItems.then()

    // way 3
    cartApi
      .get()
      .then((res) => {
        // res.data.data;
        setCartItems(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container">
      <div>user spseicf cart itsm..</div>
      <br />
      <br />
      <br />
      <br />
      <ul className="flex flex-col gap-5">
        {cartItems.map((el) => {
          return (
            <li className="flex justify-between border border-gray-200 p-4 shadow">
              <div>
                <p> titel: {el.product.title}</p>
                <p>stock: {el.product.stock}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="border p-3">-</button>
                <span>{el.quantity}</span>
                <button className="border p-3">+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <button>Proceed to checkout </button>
    </div>
  );
}
