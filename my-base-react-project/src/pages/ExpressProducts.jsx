import axios from "axios";
import React, { useEffect } from "react";

export default function ExpressProducts() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {})
      .catch((err) => {});
  }, []);
  return <div>ExpressProducts</div>;
}
