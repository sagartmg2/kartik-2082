import axios from "axios";
import React, { useEffect } from "react";

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
  return <div>Seller Products</div>;
}
