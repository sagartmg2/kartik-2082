import axios from "axios";
import React, { useEffect } from "react";

function Products() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {})
      .catch((err) => {});
  }, []);
  return <div>User Products</div>;
}

export default Products;
