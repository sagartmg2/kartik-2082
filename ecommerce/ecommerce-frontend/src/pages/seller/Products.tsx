import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router";

export default function Products() {
  //   useEffect(() => {
  //     // api call to fetch all that seller products
  //   }, []);

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3000/api/seller/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {})
      .catch((err) => {});
  }, []);
  return (
    <div className="container">
      <div>
        <Link to="/seller/products/create" className="bg-secondary text-white py-2 px-4">Add Product</Link>
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
      <li>one</li>
        </ul>
      </div>
    </div>
  );
}
