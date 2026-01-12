import React from "react";
import { Link } from "react-router";
import Button from "./components/Button";

export default function ProductCard({ product: el, isLoggedIn }) {
  return (
    <li className="border rounded-xl hover:shadow-2xl" key={el.id}>
      <Link to={`/products/${el.id}`} className="block p-4 ">
        <img src={el.thumbnail} />
        <p>{el.title}</p>
        <p>${el.price}</p>
        <Button
          title="add to cart"
          className="mt-4"
          onClickFn={(e) => {
            e.preventDefault();

            if (isLoggedIn) {
              alert("added to cart");
            } else {
              alert("please login");
            }
          }}
        />
      </Link>
    </li>
  );
}
