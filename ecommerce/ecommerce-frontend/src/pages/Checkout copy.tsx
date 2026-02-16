import React, { useEffect, useState } from "react";
import api from "../api/axios";
import cartApi, { getCartItems } from "../api/cart.api";
import orderApi from "../api/order.api";
import notify from "../helpers/notify";

interface CartItem {
  id: number;
  quantity: number;
  product: {
    title: string;
    price: number;
    stock: number;
  };
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartIems = () => {
    cartApi
      .get()
      .then((res) => {
        // res.data.data;
        setCartItems(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchCartIems();
  }, []);

  const updateCartItemCount = (id: number, quantity: number) => {
    console.log(id);
    console.log(quantity);
    cartApi.update(id, quantity).then((res) => {
      fetchCartIems();
    });
  };

  const deleteCartIem = (id: number) => {
    cartApi.delete(id).then((res) => {
      fetchCartIems();
    });
  };

  const placeOder = () => {
    orderApi
      .create({
        userInfo: {
          name: "ram",
          address: "balaju",
          notes: "somoe extra notes",
        },
        orderItems: [
          { productId: 1, quantity: 10 },
          { productId: 2, quantity: 10 },
        ],
      })
      .then((res) => {
        notify.success("order created");

        //  create a html form having post request

        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

        const createField = (name: string, value: string | number) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          input.value = value as string;
          form.appendChild(input);
        };

        const {
          tax_amount,
          total_amount,
          transaction_uuid,
          product_code,
          failure_url,
          signed_field_names,
          signature,
        } = res.data.esewa;

        createField("amount", total_amount);
        createField("tax_amount", tax_amount);
        createField("total_amount", total_amount);
        createField("transaction_uuid", transaction_uuid);
        createField("product_code", product_code);
        createField("product_service_charge", 0);
        createField("product_delivery_charge", 0);
        createField("success_url", `https://localhost:5173/order/success`);
        createField("failure_url", "https://developer.esewa.com.np/failure");
        createField("signed_field_names", signed_field_names);
        createField("signature", signature);

        // append form to body
        document.body.appendChild(form);

        // submit form
        form.submit();
      });
  };

  return (
    <div className="container">
      <div>user spseicf cart itsm..</div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ul className="flex flex-col gap-5">
            {cartItems.map((el) => {
              return (
                <li className="flex gap-4 border border-gray-200 p-4 shadow">
                  <div className="flex grow justify-between">
                    <div>
                      <p> titel: {el.product.title}</p>
                      <p>stock: {el.product.stock}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          updateCartItemCount(el.id, --el.quantity);
                        }}
                        className="border p-3"
                      >
                        -
                      </button>
                      <span>{el.quantity}</span>
                      <button
                        onClick={() => {
                          updateCartItemCount(el.id, ++el.quantity);
                        }}
                        className="border p-3"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      deleteCartIem(el.id);
                    }}
                  >
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>Shipping Address</p>
          <div>
            <input
              className="w-full border border-gray-300 p-4"
              type="text"
              placeholder="Name"
            />
          </div>
          <br />
          <div>
            <input
              className="w-full border border-gray-300 p-4"
              type="text"
              placeholder="Adress"
            />
          </div>
          <br />
          <div>
            <textarea
              className="w-full border border-gray-300 p-4"
              placeholder="Notes: "
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="payment-cash"
                name="payment_mode"
                value="cash"
              />
              <label htmlFor="payment-cash">Cash</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="payment-esewa"
                name="payment_mode"
                value="esewa"
              />
              <label htmlFor="payment-esewa">eSewa</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="payment-khalti"
                name="payment_mode"
                value="khalti"
              />
              <label htmlFor="payment-khalti">khalti</label>
            </div>
          </div>

          <button onClick={placeOder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
