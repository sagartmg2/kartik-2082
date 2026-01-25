import React from "react";
import { Link } from "react-router";
import Button from "./components/Button";
import { useDispatch, useSelector } from "react-redux";
import { incrementCartItemsCount } from "./redux/slice/cartSlice";

export default function ProductCard({ product: el }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

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
              // alert("added to cart");
              dispatch(incrementCartItemsCount());
            } else {
              alert("please login");
            }
          }}
        />
      </Link>
    </li>
  );
}
