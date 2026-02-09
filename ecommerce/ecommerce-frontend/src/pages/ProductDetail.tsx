import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";

type Props = {};

function ProductDetail({}: Props) {
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${params.id}`)
      .then((res) => {})
      .catch((err) => {});
  }, []);

  return <div>ProductDetail</div>;
}

export default ProductDetail;
